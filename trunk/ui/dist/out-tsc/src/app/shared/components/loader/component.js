"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppLoaderComponent = (function () {
    function AppLoaderComponent(el) {
        this.el = el;
    }
    AppLoaderComponent.prototype.ngAfterViewInit = function () {
        this.height = this.el.nativeElement.parentElement.clientHeight;
        this.width = this.el.nativeElement.parentElement.clientWidth;
    };
    return AppLoaderComponent;
}());
AppLoaderComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'loader',
                templateUrl: './component.html',
                styleUrls: ['./component.scss']
            },] },
];
/** @nocollapse */
AppLoaderComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
AppLoaderComponent.propDecorators = {
    'showLoader': [{ type: core_1.Input },],
};
exports.AppLoaderComponent = AppLoaderComponent;
//# sourceMappingURL=component.js.map