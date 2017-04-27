"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var about_page_component_1 = require("./about-page/about-page.component");
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    router_1.RouterModule.forChild([
                        { path: '', component: about_page_component_1.AboutPageComponent, pathMatch: 'full' }
                    ])
                ],
                declarations: [about_page_component_1.AboutPageComponent]
            },] },
];
/** @nocollapse */
AboutModule.ctorParameters = function () { return []; };
exports.AboutModule = AboutModule;
//# sourceMappingURL=about.module.js.map