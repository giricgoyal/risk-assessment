"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        loadChildren: './components/authentication/index#AuthenticationModule'
    },
    {
        path: 'app',
        loadChildren: './components/main/index#MainModule'
    }
];
exports.AppRouteModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map