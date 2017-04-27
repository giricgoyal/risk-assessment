"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var component_1 = require("./component");
var AppSidebarModule = (function () {
    function AppSidebarModule() {
    }
    return AppSidebarModule;
}());
AppSidebarModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    shared_1.SharedModule
                ],
                declarations: [
                    component_1.AppSidebarComponent
                ],
                exports: [component_1.AppSidebarComponent]
            },] },
];
/** @nocollapse */
AppSidebarModule.ctorParameters = function () { return []; };
exports.AppSidebarModule = AppSidebarModule;
//# sourceMappingURL=index.js.map