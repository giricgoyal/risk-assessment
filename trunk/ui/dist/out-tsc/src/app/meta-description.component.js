"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MetaDescriptionComponent = (function () {
    function MetaDescriptionComponent(_router) {
        this._router = _router;
    }
    MetaDescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                switch (event.urlAfterRedirects) {
                    case '/':
                        _this.content = 'Home Page Description';
                        break;
                    case '/about':
                        _this.content = 'About Page Description';
                        break;
                }
            }
        });
    };
    return MetaDescriptionComponent;
}());
MetaDescriptionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'meta[name="description"]',
                template: ''
            },] },
];
/** @nocollapse */
MetaDescriptionComponent.ctorParameters = function () { return [
    { type: router_1.Router, },
]; };
MetaDescriptionComponent.propDecorators = {
    'content': [{ type: core_1.HostBinding, args: ['attr.content',] },],
};
exports.MetaDescriptionComponent = MetaDescriptionComponent;
//# sourceMappingURL=meta-description.component.js.map