"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
// import { RouterModule } from '@angular/router';
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
exports.AppComponent = app_component_1.AppComponent;
var title_component_1 = require("./title.component");
exports.TitleComponent = title_component_1.TitleComponent;
var meta_description_component_1 = require("./meta-description.component");
exports.MetaDescriptionComponent = meta_description_component_1.MetaDescriptionComponent;
var shared_1 = require("./shared");
var app_routes_1 = require("./shared/config/app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    app_component_1.AppComponent,
                    title_component_1.TitleComponent,
                    meta_description_component_1.MetaDescriptionComponent
                ],
                imports: [
                    shared_1.SharedModule.forRoot(),
                    ng_bootstrap_1.NgbModule.forRoot(),
                    platform_browser_1.BrowserModule.withServerTransition({ appId: 'cli-universal-demo' }),
                    app_routes_1.AppRouteModule
                    // RouterModule.forRoot([
                    //   { path: 'asd', loadChildren: './home/home.module#HomeModule' },
                    //   { path: 'about', loadChildren: './about/about.module#AboutModule' },
                    //   // { path: '**', redirectTo: '', pathMatch: 'full' },
                    //   {
                    //       path: '', 
                    //       loadChildren: './components/authentication/index#AuthenticationModule'
                    //   }
                    // ])
                ],
                providers: [],
                bootstrap: [app_component_1.AppComponent, title_component_1.TitleComponent, meta_description_component_1.MetaDescriptionComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map