"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NameInitialsComponent = (function () {
    function NameInitialsComponent() {
    }
    NameInitialsComponent.prototype.ngOnChanges = function ($changeObj) {
        if ($changeObj.name && $changeObj.name.currentValue) {
            this.getInitials();
        }
    };
    NameInitialsComponent.prototype.getInitials = function () {
        var nameArr = this.name.trim().split(' ');
        if (nameArr.length) {
            if (nameArr.length > 1) {
                this.initials = nameArr[0][0] + nameArr[nameArr.length - 1][0];
            }
            else {
                this.initials = nameArr[0][0];
            }
        }
    };
    return NameInitialsComponent;
}());
NameInitialsComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'name-initials',
                templateUrl: './component.html',
                styleUrls: ['./component.scss']
            },] },
];
/** @nocollapse */
NameInitialsComponent.ctorParameters = function () { return []; };
NameInitialsComponent.propDecorators = {
    'name': [{ type: core_1.Input },],
};
exports.NameInitialsComponent = NameInitialsComponent;
//# sourceMappingURL=component.js.map