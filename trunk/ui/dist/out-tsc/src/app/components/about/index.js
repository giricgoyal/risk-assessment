"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var component_1 = require("./component");
var routes_1 = require("./routes");
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    routes_1.AboutRouteModule,
                    shared_1.SharedModule
                ],
                declarations: [
                    component_1.AboutComponent
                ]
            },] },
];
/** @nocollapse */
AboutModule.ctorParameters = function () { return []; };
exports.AboutModule = AboutModule;
//# sourceMappingURL=index.js.map