"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var SignupComponent = (function () {
    function SignupComponent(httpService, authService) {
        this.httpService = httpService;
        this.authService = authService;
    }
    return SignupComponent;
}());
SignupComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'signup-component',
                templateUrl: './signup.component.html',
                styleUrls: ['./component.scss'],
                providers: []
            },] },
];
/** @nocollapse */
SignupComponent.ctorParameters = function () { return [
    { type: shared_1.HttpService, },
    { type: shared_1.AuthenticationService, },
]; };
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map