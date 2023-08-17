import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { UpgradeModule } from '@angular/upgrade/static';
debugger;
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    console.log("BOOTSTRAPING AngularJS");
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['phonecatApp'], {strictDi: true});
});