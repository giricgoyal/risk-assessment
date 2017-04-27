"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_component_1 = require("./login.component");
var signup_component_1 = require("./signup.component");
var forgotpassword_component_1 = require("./forgotpassword.component");
var shared_1 = require("../../shared");
var routes_1 = require("./routes");
var AuthenticationModule = (function () {
    function AuthenticationModule(authService) {
        this.authService = authService;
        if (this.authService.isAuthenticated()) {
            this.authService.redirectAfterAuth();
        }
    }
    return AuthenticationModule;
}());
AuthenticationModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    routes_1.AuthenticationRouteModule,
                    shared_1.SharedModule
                ],
                declarations: [
                    login_component_1.LoginComponent,
                    signup_component_1.SignupComponent,
                    forgotpassword_component_1.ForgotPasswordComponent
                ]
            },] },
];
/** @nocollapse */
AuthenticationModule.ctorParameters = function () { return [
    { type: shared_1.AuthenticationService, },
]; };
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=index.js.map