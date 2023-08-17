"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const static_1 = require("@angular/upgrade/static");
const app_component_1 = require("./app.component");
let AppModule = exports.AppModule = class AppModule {
    constructor(upgrade) {
        this.upgrade = upgrade;
    }
    ngDoBootstrap() {
        // debugger;
        // this.upgrade.bootstrap(document.body, ['phonecatApp']);
    }
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        imports: [
            platform_browser_1.BrowserModule,
            static_1.UpgradeModule
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map