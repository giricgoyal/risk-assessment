"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// import { ToasterModule } from 'angular2-toaster';
var router_1 = require("@angular/router");
// import { MetaDescriptionComponent } from '../meta-description.component';
// import { TitleComponent } from '../title.component';
var services_1 = require("./services");
var components_1 = require("./components");
var d3_ng2_service_1 = require("d3-ng2-service");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [services_1.HttpService, services_1.ToasterInjectableService, services_1.SessionService, services_1.AuthenticationService, services_1.AuthGuard, d3_ng2_service_1.D3Service]
        };
    };
    return SharedModule;
}());
SharedModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    http_1.HttpModule,
                    // ToasterModule,
                    router_1.RouterModule
                ],
                declarations: [
                    components_1.AppLoaderComponent,
                    components_1.NameInitialsComponent
                    // TitleComponent, 
                    // MetaDescriptionComponent
                ],
                exports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    http_1.HttpModule,
                    // ToasterModule,
                    router_1.RouterModule,
                    components_1.AppLoaderComponent,
                    components_1.NameInitialsComponent
                    // TitleComponent, 
                    // MetaDescriptionComponent
                ]
            },] },
];
/** @nocollapse */
SharedModule.ctorParameters = function () { return []; };
exports.SharedModule = SharedModule;
//# sourceMappingURL=module.js.map