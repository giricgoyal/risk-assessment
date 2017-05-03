"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var AppSidebarComponent = (function () {
    function AppSidebarComponent() {
        this.magnitude = '';
        this.riskSubriskUpdate = new core_1.EventEmitter();
        this.metricUpdate = new core_1.EventEmitter();
        this.magnitudeUpdate = new core_1.EventEmitter();
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
    AppSidebarComponent.prototype.ngAfterViewInit = function () {
        this.emitRiskSubrisk();
    };
    AppSidebarComponent.prototype.onRiskChange = function () {
        this.subRisks = this.subRisksList[this.risk];
        this.subRisk = this.subRisks[0].key;
        this.magnitude = '';
        this.emitRiskSubrisk();
    };
    AppSidebarComponent.prototype.onSubRiskChange = function () {
        this.magnitude = '';
        this.emitRiskSubrisk();
    };
    AppSidebarComponent.prototype.emitRiskSubrisk = function () {
        var obj = {};
        obj[this.risk] = this.subRisk;
        this.riskSubriskUpdate.emit(obj);
    };
    AppSidebarComponent.prototype.onMetricChange = function () {
        this.metricUpdate.emit(this.metric);
    };
    AppSidebarComponent.prototype.omMagnitudeChange = function () {
        this.magnitudeUpdate.emit(this.magnitude);
    };
    return AppSidebarComponent;
}());
AppSidebarComponent.decorators = [
    { type: core_2.Component, args: [{
                selector: 'sidebar',
                templateUrl: './component.html',
                styleUrls: ['./component.scss'],
                providers: []
            },] },
];
/** @nocollapse */
AppSidebarComponent.ctorParameters = function () { return []; };
AppSidebarComponent.propDecorators = {
    'magnitudeList': [{ type: core_1.Input },],
    'riskSubriskUpdate': [{ type: core_1.Output },],
    'metricUpdate': [{ type: core_1.Output },],
    'magnitudeUpdate': [{ type: core_1.Output },],
};
exports.AppSidebarComponent = AppSidebarComponent;
//# sourceMappingURL=component.js.map