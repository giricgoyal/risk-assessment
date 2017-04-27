webpackJsonp([1,7],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationModule = (function () {
    function AuthenticationModule(authService) {
        this.authService = authService;
        if (this.authService.isAuthenticated()) {
            this.authService.redirectAfterAuth();
        }
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__routes__["a" /* AuthenticationRouteModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_3__forgotpassword_component__["a" /* ForgotPasswordComponent */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["e" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["e" /* AuthenticationService */]) === "function" && _a || Object])
], AuthenticationModule);

var _a;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, ".download-link-img {\n  max-width: 200px; }\n\n.login-container > div,\n.signup-container > div {\n  height: 100vh; }\n\n.login-container .login-panel,\n.login-container .signup-panel,\n.signup-container .login-panel,\n.signup-container .signup-panel {\n  box-shadow: 0px 0px 2px 2px #999999;\n  -moz-box-shadow: 0px 0px 2px 2px #999999;\n  -webkit-box-shadow: 0px 0px 2px 2px #999999;\n  max-width: 350px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent() {
    }
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'forgotpassword-component',
        template: __webpack_require__(310),
        styles: [__webpack_require__(292)],
        providers: []
    })
], ForgotPasswordComponent);

//# sourceMappingURL=forgotpassword.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'login-component',
        template: __webpack_require__(311),
        styles: [__webpack_require__(292)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* AuthenticationService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(httpService, authService) {
        this.httpService = httpService;
        this.authService = authService;
    }
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'signup-component',
        template: __webpack_require__(312),
        styles: [__webpack_require__(292)],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* AuthenticationService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_component__ = __webpack_require__(294);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRouteModule; });




var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'requestotp',
        component: __WEBPACK_IMPORTED_MODULE_3__forgotpassword_component__["a" /* ForgotPasswordComponent */]
    }
];
var AuthenticationRouteModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n    <div class=\"d-flex align-items-center justify-content-center flex-wrap\">\n        <div class=\"text-center mr-5\">\n        </div>\n        <div class=\"login-panel ml-5\">\n            <loader></loader>\n            <div class=\"p-5\">\n                <div class=\"text-center mb-4\">\n                    <h6>Forgot Password</h6>\n                    <label>Already have an account? <a [routerLink]=\"['/login']\">Login</a></label>\n                </div>\n                <form>\n                    <div class=\"form-group\">\n                        <!--<label for=\"username\">Mobile Number/Email</label>-->\n                        <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Mobile number/Email address\">\n                    </div>\n                    <button class=\"btn btn-primary btn-block\">Request OTP</button>\n                </form>\n            </div>\n        </div>\n        <div></div>\n    </div>\n</div>"

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n    <div class=\"d-flex align-items-center justify-content-center flex-wrap\">\n        <div class=\"text-center mr-5\">\n        </div>\n        <div class=\"login-panel ml-5\">\n            <loader [showLoader]=\"showLoader\"></loader>\n            <div class=\"p-5\">\n                <div class=\"text-center mb-4\">\n                    <h6>Login</h6>\n                    <label>Don't have an account? <a [routerLink]=\"['/signup']\">Signup</a></label>\n                </div>\n                <form #f=\"ngForm\" (ngSubmit)=\"login()\">\n                    <div class=\"form-group\">\n                        <!--<label for=\"username\">Mobile Number/Email</label>-->\n                        <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)]=\"data.phonenumber\" placeholder=\"Mobile number/Email address\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <!--<label for=\"password\">Password</label>-->\n                        <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" [(ngModel)]=\"data.password\" placeholder=\"Password\" />\n                    </div>\n                    <button class=\"btn btn-primary btn-block\" [disabled]=\"isLoginDisabled()\" type=\"submit\">\n                    Login\n                </button>\n                    <div class=\"text-center mt-4\">\n                        <a [routerLink]=\"['/requestotp']\">Forgot Password?</a>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-container\">\n    <div class=\"d-flex align-items-center justify-content-center flex-wrap\">\n        <div class=\"text-center mr-5\">\n        </div>\n        <div class=\"signup-panel ml-5\">\n            <loader></loader>\n            <div class=\"p-5\">\n                <div class=\"text-center mb-4\">\n                    <h6>Sign</h6>\n                    <label>Already have an account? <a [routerLink]=\"['/login']\">Login</a></label>\n                </div>\n                <form novalidate>\n                    <div class=\"form-group\">\n                        <!--<label for=\"password\">Password</label>-->\n                        <input type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"First Name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <!--<label for=\"password\">Password</label>-->\n                        <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Last Name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <!--<label for=\"username\">Mobile Number/Email</label>-->\n                        <input type=\"text\" class=\"form-control\" id=\"phonenumber\" placeholder=\"Mobile number\">\n                    </div>\n                    <div class=\"form-group\">\n                        <!--<label for=\"username\">Mobile Number/Email</label>-->\n                        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email address\">\n                    </div>\n                    <div class=\"form-group\">\n                        <!--<label for=\"password\">Password</label>-->\n                        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n                    </div>\n                    <button ng-disabled=\"$ctrl.isSignupDisabled()\" class=\"btn btn-primary btn-block\" ng-click=\"signup()\">Signup</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map