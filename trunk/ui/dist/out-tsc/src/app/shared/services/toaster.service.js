"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { ToasterService, ToasterConfig } from 'angular2-toaster';
var ToasterInjectableService = (function () {
    function ToasterInjectableService() {
    }
    // private toasterService: ToasterService
    // constructor (toasterService: ToasterService) {
    //     this.toasterService = toasterService;
    // }
    ToasterInjectableService.prototype.getConfig = function () {
        // return new ToasterConfig({
        //     showCloseButton: false, 
        //     tapToDismiss: true, 
        //     timeout: 5000
        // });
    };
    ToasterInjectableService.prototype.success = function (title, body) {
        // this.toasterService.pop('success', title, body);
    };
    ToasterInjectableService.prototype.warning = function (title, body) {
        // this.toasterService.pop('warning', title, body);
    };
    ToasterInjectableService.prototype.error = function (title, body) {
        // this.toasterService.pop('error', title, body);
    };
    ToasterInjectableService.prototype.info = function (title, body) {
        // this.toasterService.pop('info', title, body);
    };
    return ToasterInjectableService;
}());
ToasterInjectableService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ToasterInjectableService.ctorParameters = function () { return []; };
exports.ToasterInjectableService = ToasterInjectableService;
//# sourceMappingURL=toaster.service.js.map