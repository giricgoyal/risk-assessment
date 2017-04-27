/// <reference types="node" />
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var app_module_1 = require("./app.module");
var ServerFactoryLoader = (function (_super) {
    __extends(ServerFactoryLoader, _super);
    function ServerFactoryLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServerFactoryLoader.prototype.load = function (path) {
        return new Promise(function (resolve, reject) {
            var _a = path.split('#'), file = _a[0], className = _a[1];
            var classes = require('../../dist/ngfactory/src/app' + file.slice(1) + '.ngfactory');
            resolve(classes[className + 'NgFactory']);
        });
    };
    return ServerFactoryLoader;
}(core_1.NgModuleFactoryLoader));
exports.ServerFactoryLoader = ServerFactoryLoader;
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
AppServerModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    platform_server_1.ServerModule,
                    app_module_1.AppModule
                ],
                bootstrap: [app_module_1.AppComponent, app_module_1.TitleComponent, app_module_1.MetaDescriptionComponent],
                providers: [
                    { provide: core_1.NgModuleFactoryLoader, useClass: ServerFactoryLoader }
                ]
            },] },
];
/** @nocollapse */
AppServerModule.ctorParameters = function () { return []; };
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=app.server.module.js.map