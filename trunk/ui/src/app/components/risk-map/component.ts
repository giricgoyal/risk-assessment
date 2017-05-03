
import { D3Service, D3 } from 'd3-ng2-service';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { HttpService } from '../../shared';
import 'leaflet/dist/leaflet-src.js';
import './leaflet-heat.js';
// import 'webgl-heatmap/webgl-heatmap.js';
// import 'leaflet-webgl-heatmap/src/leaflet-webgl-heatmap.js';

declare let L: any;

@Component({
    selector: 'risk-map',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class RiskMapComponent implements OnInit, AfterViewInit {
    private d3: D3;
    options: any;
    private heatMapData: any;
    private plotMetric: string;
    private map: L.Map;
    private heatMetric: any;
    private heatMagnitude: any;
    private magnitude: any = '';
    magnitudeList: any = [];
    
    @ViewChild('riskMapContainer') mapContainer: ElementRef;

    constructor(private httpService: HttpService, d3Service: D3Service) {
        this.d3 = d3Service.getD3();
    }

    ngOnInit() {
        this.options = {
            layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
                    maxZoom: 4, 
                    minZoom: 3,
                    attribution: '' 
                })
            ],
            zoom: 2,
            center: L.latLng({ lat: 38.991709, lng: -76.886109 })
        };

        this.plotMetric = 'economic_loss';
    }

    ngAfterViewInit() {
        
    }

    onMapReady(map: L.Map) {
        this.map = map;
    }

    getData(obj) {
        this.httpService.request(`/events`, 'POST', 'json', obj, null, (resp) => {
            this.magnitudeList = [];
            this.magnitude = '';
            if (this.heatMagnitude && this.map.hasLayer(this.heatMagnitude)) {
                this.map.removeLayer(this.heatMagnitude);
            }
            this.heatMapData = resp;
            if (this.heatMapData[0].magnitude_1)
                this.magnitudeList.push({key: 'value_1', value: this.heatMapData[0].magnitude_1});
            if (this.heatMapData[0].magnitude_2)
                this.magnitudeList.push({key: 'value_2', value: this.heatMapData[0].magnitude_2});
            if (this.heatMapData[0].magnitude_3)
                this.magnitudeList.push({key: 'value_3', value: this.heatMapData[0].magnitude_3});
            this.plotDataOnMap('metric');
        }, (err) => {
            console.log(err);
        });
    }

    getMin(data, key) {
        return this.d3.min(data, (d: any) => {
            return d[key];
        });
    }

    getMax(data, key) {
        return this.d3.max(data, (d: any) => {
            return d[key];
        });
    }

    getScaledValue(value, leftMin, leftMax, rightMin, rightMax) {
        let leftSpan = leftMax - leftMin;
        let rightSpan = rightMax - rightMin;

        let valueScaled = (value - leftMin) / leftSpan;

        return rightMin + (valueScaled * rightSpan);
    }

    plotDataOnMap(dataType) {
        let leftMin = 0;
        let leftMax = this.getMax(this.heatMapData, this.plotMetric);
        let rightMin = 0;
        let rightMax = 1;

        let latlongVals = [];

        let key = dataType == 'metric' ? this.plotMetric : this.magnitude;
        console.log(key);
        this.heatMapData.forEach((datum: any) => {
            if (!datum.latitude || !datum.longitude || datum[key] == null ||  datum[key] == '') {
                console.log(datum);
            }
            else {
                let scaledVal = this.getScaledValue(datum[key], leftMin, leftMax, rightMin, rightMax);
                latlongVals.push([datum.latitude, datum.longitude, scaledVal]);
            }
        });

        if (dataType == 'metric') {
            if (this.heatMetric && this.map.hasLayer(this.heatMetric)) {
                this.map.removeLayer(this.heatMetric);
            }


            this.heatMetric = L.heatLayer(latlongVals, {
                radius: 25,
                blur: 10,
                gradient: {0: 'red'}
            }).addTo(this.map);
        }
        else if (dataType == 'magnitude') {
            if (this.heatMagnitude && this.map.hasLayer(this.heatMagnitude)) {
                this.map.removeLayer(this.heatMagnitude);
            }


            this.heatMagnitude = L.heatLayer(latlongVals, {
                radius: 5,
                blur: 1,
                gradient: {0: 'blue'}
            }).addTo(this.map);
        }
        
    }

    riskSubriskUpdateFn($event) {
        this.getData($event);
    }

    metricUpdateFn($event) {
        this.plotMetric = $event;
        this.plotDataOnMap('metric');
    }

    magnitudeUpdateFn($event) {
        console.log($event);
        this.magnitude = $event;
        if ($event) {
            this.plotDataOnMap('magnitude');
        }
        else {
            if (this.heatMagnitude && this.map.hasLayer(this.heatMagnitude)) {
                this.map.removeLayer(this.heatMagnitude);
            }
        }
    }
}