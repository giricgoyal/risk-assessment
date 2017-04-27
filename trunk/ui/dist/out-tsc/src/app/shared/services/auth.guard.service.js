"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AuthGuard.ctorParameters = function () { return [
    { type: auth_service_1.AuthenticationService, },
    { type: router_1.Router, },
]; };
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.service.js.map