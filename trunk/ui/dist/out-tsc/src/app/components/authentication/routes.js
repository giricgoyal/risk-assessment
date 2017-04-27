"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var signup_component_1 = require("./signup.component");
var forgotpassword_component_1 = require("./forgotpassword.component");
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: 'requestotp',
        component: forgotpassword_component_1.ForgotPasswordComponent
    }
];
exports.AuthenticationRouteModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=routes.js.map