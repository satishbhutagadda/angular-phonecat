import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports: [
    BrowserModule,
  ],
})
export class AppModule implements DoBootstrap {
    constructor(private upgrade: UpgradeModule) { }
    
    ngDoBootstrap() {
        debugger;
        this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    }
}