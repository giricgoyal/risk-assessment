"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var __1 = require("..");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var toaster_service_1 = require("./toaster.service");
var HttpService = (function () {
    function HttpService(http, toasterService) {
        this.http = http;
        this.toasterService = toasterService;
        this.headers = new http_1.Headers();
    }
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body.result || body;
    };
    HttpService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        var err;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            err = body.message;
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable_1.Observable.throw(err);
    };
    HttpService.prototype.setHttpDefaultsHeadersCommonAuthorization = function (header) {
        this.headers.set('Authorization', header);
    };
    HttpService.prototype.request = function (url, method, dataType, data, params, successFn, errorFn) {
        var _this = this;
        this.http.request(__1.APP_CONFIG.api + url, {
            method: method,
            body: data,
            headers: this.headers
        })
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(function (res) { return successFn(res); }, function (err) {
            _this.toasterService.error('Error', err);
            if (errorFn) {
                errorFn(err);
            }
        });
    };
    return HttpService;
}());
HttpService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
HttpService.ctorParameters = function () { return [
    { type: http_1.Http, },
    { type: toaster_service_1.ToasterInjectableService, },
]; };
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map