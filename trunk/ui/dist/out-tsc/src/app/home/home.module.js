"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var home_page_component_1 = require("./home-page/home-page.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    router_1.RouterModule.forChild([
                        { path: '', component: home_page_component_1.HomePageComponent, pathMatch: 'full' }
                    ])
                ],
                declarations: [home_page_component_1.HomePageComponent]
            },] },
];
/** @nocollapse */
HomeModule.ctorParameters = function () { return []; };
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map