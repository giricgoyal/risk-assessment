"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TitleComponent = (function () {
    function TitleComponent(_router) {
        this._router = _router;
    }
    TitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                switch (event.urlAfterRedirects) {
                    case '/':
                        _this.title = 'Home Page';
                        break;
                    case '/about':
                        _this.title = 'About Page';
                        break;
                }
            }
        });
    };
    return TitleComponent;
}());
TitleComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'title',
                template: "{{title}}"
            },] },
];
/** @nocollapse */
TitleComponent.ctorParameters = function () { return [
    { type: router_1.Router, },
]; };
exports.TitleComponent = TitleComponent;
//# sourceMappingURL=title.component.js.map