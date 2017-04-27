"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../shared/services");
var router_1 = require("@angular/router");
var AuthenticationService = (function () {
    function AuthenticationService(httpService, sessionService, routerState, router) {
        this.httpService = httpService;
        this.sessionService = sessionService;
        this.routerState = routerState;
        this.router = router;
    }
    AuthenticationService.prototype.redirectAfterAuth = function () {
        var _this = this;
        this.routerState.params.subscribe(function (params) {
            if (params['redirecturl']) {
                window.location.href = params['redirecturl'];
            }
            else {
                _this.router.navigate(['/app/about']);
            }
        });
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return !!this.sessionService.getSessionObj('user_id');
    };
    ;
    AuthenticationService.prototype.isAdmin = function () {
        return this.sessionService.getSessionObj('is_admin') === 'true';
    };
    AuthenticationService.prototype.getUserId = function () {
        return this.sessionService.getSessionObj('user_id');
    };
    AuthenticationService.prototype.getAccessType = function () {
        return this.sessionService.getSessionObj('access_type');
    };
    AuthenticationService.prototype.logout = function () {
        this.sessionService.removeSessionObj('client_id');
        this.sessionService.removeSessionObj('client_secret');
        this.sessionService.removeSessionObj('access_token');
        this.sessionService.removeSessionObj('refresh_token');
        this.sessionService.removeSessionObj('token_type');
        this.sessionService.removeSessionObj('user_id');
        this.sessionService.removeSessionObj('is_admin');
        this.sessionService.removeSessionObj('fullname');
        this.router.navigate(['/login']);
    };
    AuthenticationService.prototype.getToken = function (obj, userObj, successFn, errorFn) {
        var _this = this;
        var data = {
            grant_type: 'password',
            client_id: obj.clientId,
            client_secret: obj.clientSecret,
            username: userObj.phonenumber,
            password: userObj.password
        };
        this.httpService.request('/oauth/token', 'POST', 'json', data, null, function (response) {
            _this.sessionService.setSessionObj('client_id', data.client_id);
            _this.sessionService.setSessionObj('client_secret', data.client_secret);
            _this.sessionService.setSessionObj('access_token', response.access_token);
            _this.sessionService.setSessionObj('refresh_token', response.refresh_token);
            _this.sessionService.setSessionObj('token_type', response.token_type);
            _this.sessionService.setSessionObj('fullname', obj.firstname + ' ' + obj.lastname);
            _this.sessionService.setSessionObj('user_id', obj.userId);
            if (obj.is_admin) {
                _this.sessionService.setSessionObj('is_admin', obj.is_admin);
            }
            _this.httpService.setHttpDefaultsHeadersCommonAuthorization('Bearer ' + response.access_token);
            _this.redirectAfterAuth();
            if (successFn) {
                successFn();
            }
        }, null);
    };
    ;
    return AuthenticationService;
}());
AuthenticationService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AuthenticationService.ctorParameters = function () { return [
    { type: services_1.HttpService, },
    { type: services_1.SessionService, },
    { type: router_1.ActivatedRoute, },
    { type: router_1.Router, },
]; };
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=auth.service.js.map