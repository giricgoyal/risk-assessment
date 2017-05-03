"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var d3_ng2_service_1 = require("d3-ng2-service");
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
require("leaflet/dist/leaflet-src.js");
require("./leaflet-heat.js");
var RiskMapComponent = (function () {
    function RiskMapComponent(httpService, d3Service) {
        this.httpService = httpService;
        this.magnitude = '';
        this.magnitudeList = [];
        this.d3 = d3Service.getD3();
    }
    RiskMapComponent.prototype.ngOnInit = function () {
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
    };
    RiskMapComponent.prototype.ngAfterViewInit = function () {
    };
    RiskMapComponent.prototype.onMapReady = function (map) {
        this.map = map;
    };
    RiskMapComponent.prototype.getData = function (obj) {
        var _this = this;
        this.httpService.request("/events", 'POST', 'json', obj, null, function (resp) {
            _this.magnitudeList = [];
            _this.magnitude = '';
            if (_this.heatMagnitude && _this.map.hasLayer(_this.heatMagnitude)) {
                _this.map.removeLayer(_this.heatMagnitude);
            }
            _this.heatMapData = resp;
            if (_this.heatMapData[0].magnitude_1)
                _this.magnitudeList.push({ key: 'value_1', value: _this.heatMapData[0].magnitude_1 });
            if (_this.heatMapData[0].magnitude_2)
                _this.magnitudeList.push({ key: 'value_2', value: _this.heatMapData[0].magnitude_2 });
            if (_this.heatMapData[0].magnitude_3)
                _this.magnitudeList.push({ key: 'value_3', value: _this.heatMapData[0].magnitude_3 });
            _this.plotDataOnMap('metric');
        }, function (err) {
            console.log(err);
        });
    };
    RiskMapComponent.prototype.getMin = function (data, key) {
        return this.d3.min(data, function (d) {
            return d[key];
        });
    };
    RiskMapComponent.prototype.getMax = function (data, key) {
        return this.d3.max(data, function (d) {
            return d[key];
        });
    };
    RiskMapComponent.prototype.getScaledValue = function (value, leftMin, leftMax, rightMin, rightMax) {
        var leftSpan = leftMax - leftMin;
        var rightSpan = rightMax - rightMin;
        var valueScaled = (value - leftMin) / leftSpan;
        return rightMin + (valueScaled * rightSpan);
    };
    RiskMapComponent.prototype.plotDataOnMap = function (dataType) {
        var _this = this;
        var leftMin = 0;
        var leftMax = this.getMax(this.heatMapData, this.plotMetric);
        var rightMin = 0;
        var rightMax = 1;
        var latlongVals = [];
        var key = dataType == 'metric' ? this.plotMetric : this.magnitude;
        console.log(key);
        this.heatMapData.forEach(function (datum) {
            if (!datum.latitude || !datum.longitude || datum[key] == null || datum[key] == '') {
                console.log(datum);
            }
            else {
                var scaledVal = _this.getScaledValue(datum[key], leftMin, leftMax, rightMin, rightMax);
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
                gradient: { 0: 'red' }
            }).addTo(this.map);
        }
        else if (dataType == 'magnitude') {
            if (this.heatMagnitude && this.map.hasLayer(this.heatMagnitude)) {
                this.map.removeLayer(this.heatMagnitude);
            }
            this.heatMagnitude = L.heatLayer(latlongVals, {
                radius: 5,
                blur: 1,
                gradient: { 0: 'blue' }
            }).addTo(this.map);
        }
    };
    RiskMapComponent.prototype.riskSubriskUpdateFn = function ($event) {
        this.getData($event);
    };
    RiskMapComponent.prototype.metricUpdateFn = function ($event) {
        this.plotMetric = $event;
        this.plotDataOnMap('metric');
    };
    RiskMapComponent.prototype.magnitudeUpdateFn = function ($event) {
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
    };
    return RiskMapComponent;
}());
RiskMapComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'risk-map',
                templateUrl: './component.html',
                styleUrls: ['./component.scss']
            },] },
];
/** @nocollapse */
RiskMapComponent.ctorParameters = function () { return [
    { type: shared_1.HttpService, },
    { type: d3_ng2_service_1.D3Service, },
]; };
RiskMapComponent.propDecorators = {
    'mapContainer': [{ type: core_1.ViewChild, args: ['riskMapContainer',] },],
};
exports.RiskMapComponent = RiskMapComponent;
//# sourceMappingURL=component.js.map