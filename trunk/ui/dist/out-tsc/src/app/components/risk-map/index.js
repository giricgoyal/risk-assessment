"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sidebar_1 = require("../sidebar");
var routes_1 = require("./routes");
var component_1 = require("./component");
var shared_1 = require("../../shared");
var core_1 = require("@angular/core");
var angular2_leaflet_1 = require("@asymmetrik/angular2-leaflet");
var RiskMapModule = (function () {
    function RiskMapModule() {
    }
    return RiskMapModule;
}());
RiskMapModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    sidebar_1.AppSidebarModule,
                    shared_1.SharedModule,
                    routes_1.RiskMapRouteModule,
                    angular2_leaflet_1.LeafletModule
                ],
                declarations: [
                    component_1.RiskMapComponent
                ]
            },] },
];
/** @nocollapse */
RiskMapModule.ctorParameters = function () { return []; };
exports.RiskMapModule = RiskMapModule;
//# sourceMappingURL=index.js.map