"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
const static_1 = require("@angular/upgrade/static");
debugger;
(0, platform_browser_dynamic_1.platformBrowserDynamic)().bootstrapModule(app_module_1.AppModule).then(platformRef => {
    console.log("BOOTSTRAPING AngularJS");
    const upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
});
//# sourceMappingURL=main.js.map