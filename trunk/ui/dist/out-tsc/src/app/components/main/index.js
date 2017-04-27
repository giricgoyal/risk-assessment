"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var component_1 = require("./component");
var header_1 = require("../header");
var routes_1 = require("./routes");
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    header_1.AppHeaderModule,
                    routes_1.MainRouteModule,
                    shared_1.SharedModule
                ],
                declarations: [
                    component_1.MainComponent
                ]
            },] },
];
/** @nocollapse */
MainModule.ctorParameters = function () { return []; };
exports.MainModule = MainModule;
//# sourceMappingURL=index.js.map