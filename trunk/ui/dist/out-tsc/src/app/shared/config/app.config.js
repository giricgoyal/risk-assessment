"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../../environments/environment");
var api = {
    prod: '',
    dev: 'http://52.66.86.92:3902/api',
    localhost: 'http://localhost:3000/api'
};
var env = 'dev';
if (environment_1.environment.production) {
    env = 'prod';
}
exports.APP_CONFIG = {
    api: api[env],
    appTitle: 'app UI',
    storage: 'localStorage',
    jwtKey: 'jwtToken',
};
//# sourceMappingURL=app.config.js.map