"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('cli-universal-demo App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.CliUniversalDemoPage();
    });
    it('should display message saying home-page works!', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('home-page works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map