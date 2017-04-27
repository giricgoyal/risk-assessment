"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_1 = require("../config/app.config");
var SessionService = (function () {
    function SessionService() {
        this.storage = app_config_1.APP_CONFIG.storage;
    }
    SessionService.prototype.getSessionObj = function (key) {
        if (this.storage === 'localStorage') {
            return "";
            // return localStorage.getItem(key);
        }
    };
    ;
    SessionService.prototype.setSessionObj = function (key, val) {
        if (this.storage === 'localStorage') {
            // localStorage.setItem(key, val);
        }
    };
    ;
    SessionService.prototype.removeSessionObj = function (key) {
        if (this.storage === 'localStorage') {
            // localStorage.removeItem(key);
        }
    };
    ;
    return SessionService;
}());
SessionService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
SessionService.ctorParameters = function () { return []; };
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map