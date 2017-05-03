"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var component_1 = require("./component");
var shared_1 = require("../../shared");
var routes = [
    {
        path: '',
        component: component_1.MainComponent,
        children: [
            {
                path: '',
                loadChildren: '../risk-map/index#RiskMapModule',
                canActivate: [shared_1.AuthGuard]
            }
        ]
    }
];
exports.MainRouteModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=routes.js.map