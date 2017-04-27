"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var LoginComponent = (function () {
    function LoginComponent(httpService, authService) {
        this.data = {
            phonenumber: '',
            password: ''
        };
        this.httpService = httpService;
        this.authService = authService;
        this.showLoader = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.showLoader = true;
        this.httpService.request('/users/login', 'POST', 'json', this.data, null, function (response) {
            console.log(response);
            _this.authService.getToken(response, _this.data, function () {
                _this.showLoader = false;
            }, null);
        }, function () {
            _this.showLoader = false;
        });
    };
    LoginComponent.prototype.isLoginDisabled = function () {
        return !this.data.phonenumber || !this.data.password;
    };
    return LoginComponent;
}());
LoginComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'login-component',
                templateUrl: './login.component.html',
                styleUrls: ['./component.scss']
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = function () { return [
    { type: shared_1.HttpService, },
    { type: shared_1.AuthenticationService, },
]; };
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map