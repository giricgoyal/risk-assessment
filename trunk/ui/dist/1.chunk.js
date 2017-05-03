webpackJsonp([1,6],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(768);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__header__["a" /* AppHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* MainRouteModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__component__["a" /* MainComponent */]
        ]
    })
], MainModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
    }
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Component */])({
        selector: 'main-component',
        template: __webpack_require__(777),
        styles: [__webpack_require__(773)],
        providers: []
    })
], MainComponent);

//# sourceMappingURL=component.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppHeaderComponent = (function () {
    function AppHeaderComponent(sessionService, authService) {
        this.sessionService = sessionService;
        this.authService = authService;
        this.title = '';
        this.title = __WEBPACK_IMPORTED_MODULE_1__shared__["c" /* APP_CONFIG */].appTitle;
        this.fullName = this.sessionService.getSessionObj('fullname');
        this.isAdmin = this.sessionService.getSessionObj('is_admin') === 'true';
        this.isDoctor = this.sessionService.getSessionObj('access_type') === 'doctor';
    }
    AppHeaderComponent.prototype.toggleSidebar = function () {
    };
    AppHeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return AppHeaderComponent;
}());
AppHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(776),
        styles: [__webpack_require__(772)],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["e" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* AuthenticationService */]) === "function" && _b || Object])
], AppHeaderComponent);

var _a, _b;
//# sourceMappingURL=component.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__(766);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { AppSidebarModule } from '../sidebar';
var AppHeaderModule = (function () {
    function AppHeaderModule() {
    }
    return AppHeaderModule;
}());
AppHeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            // AppSidebarModule,
            __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__component__["a" /* AppHeaderComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__component__["a" /* AppHeaderComponent */]]
    })
], AppHeaderModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRouteModule; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__component__["a" /* MainComponent */],
        children: [
            {
                path: '',
                loadChildren: '../risk-map/index#RiskMapModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared__["d" /* AuthGuard */]]
            }
        ]
    }
];
var MainRouteModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-light  bg-primary d-flex align-items-center justify-content-center flex-wrap\">\n        <div class=\"container align-items-center\">\n            <!--<a class=\"pull-left text-white\" (click)=\"toggleSidebar()\"><i class=\"fa fa-bars fa-2x\"></i></a>\n            <a class=\"navbar-brand\" ng-click=\"$ctrl.text()\" ng-bind=\"::$ctrl.appName | lowercase\">\n            </a>\n            <span class=\"pull-right text-white\">\n            <a class=\"text-white\" (click)=\"logout()\">Logout</a>\n            </span>-->\n        </div>\n        <div></div>\n    </nav>\n    <!--<sidebar></sidebar>-->\n</header>"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n    <router-outlet></router-outlet>\n</main>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map