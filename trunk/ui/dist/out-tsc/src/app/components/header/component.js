"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var shared_2 = require("../../shared");
var AppHeaderComponent = (function () {
    function AppHeaderComponent(sessionService, authService) {
        this.sessionService = sessionService;
        this.authService = authService;
        this.title = '';
        this.title = shared_1.APP_CONFIG.appTitle;
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
AppHeaderComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-header',
                templateUrl: './component.html',
                styleUrls: ['./component.scss'],
                providers: []
            },] },
];
/** @nocollapse */
AppHeaderComponent.ctorParameters = function () { return [
    { type: shared_2.SessionService, },
    { type: shared_2.AuthenticationService, },
]; };
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=component.js.map