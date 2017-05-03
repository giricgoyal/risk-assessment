import { Input, Output, EventEmitter } from '@angular/core';
import { Component, Inject, AfterViewInit } from '@angular/core';
import { APP_CONFIG } from '../../shared';

@Component({
    selector: 'sidebar',
    templateUrl: './component.html',
    styleUrls: ['./component.scss'],
    providers: []
})

export class AppSidebarComponent implements AfterViewInit {
    risk: any;
    subRisksList: any;
    subRisk: any;
    subRisks: any;
    metric: any;
    magnitude: any = '';

    @Input() magnitudeList: any;

    @Output() private riskSubriskUpdate: EventEmitter<any> = new EventEmitter();
    @Output() private metricUpdate: EventEmitter<any> = new EventEmitter();
    @Output() private magnitudeUpdate: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.risk = 'threat';
        this.metric = 'economic_loss';

        this.subRisksList = {
            risk_class: [{
                key: 'Natural',
                value: 'Natural'
            }],
            risk_type: [{
                key: 'Hydrological',
                value: 'Hydrological'
            },
            {
                key: 'Geological',
                value: 'Geological'
            },
            {
                key: 'Climatological',
                value: 'Climatological'
            }],
            risk_group: [{
                key: 'Flood',
                value: 'Flood'
            },
            {
                key: 'Tectonic Activity',
                value: 'Tectonic Activity'
            },
            {
                key: 'Storm',
                value: 'Storm'
            }],
            threat: [{
                key: 'Earthquake',
                value: 'Earthquake'
            },
            {
                key: 'Tsunami',
                value: 'Tsunami'
            },
            {
                key: 'Riverine Flood',
                value: 'Riverine Flood'
            },
            {
                key: 'Tropical Storm',
                value: 'Tropical Storm'
            }]
        };

        this.subRisks = this.subRisksList[this.risk];
        this.subRisk = this.subRisks[0].key;
    }

    ngAfterViewInit() {
        this.emitRiskSubrisk();
    }

    onRiskChange() {
        this.subRisks = this.subRisksList[this.risk];
        this.subRisk = this.subRisks[0].key;
        this.magnitude = '';
        this.emitRiskSubrisk();
    }

    onSubRiskChange() {
        this.magnitude = '';
        this.emitRiskSubrisk();
    }

    emitRiskSubrisk() {
        let obj = {};
        obj[this.risk] = this.subRisk;
        this.riskSubriskUpdate.emit(obj);
    }

    onMetricChange() {
        this.metricUpdate.emit(this.metric);
    }

    omMagnitudeChange() {
        this.magnitudeUpdate.emit(this.magnitude);
    }
}