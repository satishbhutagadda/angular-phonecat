"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let AppComponent = exports.AppComponent = class AppComponent {
    constructor() {
        this.name = 'Angular';
    }
};
exports.AppComponent = AppComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'my-app',
        template: `<h1>Hello {{name}}</h1>`
    })
], AppComponent);
//# sourceMappingURL=app.component.js.map