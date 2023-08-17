import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule implements DoBootstrap {
    constructor(private upgrade: UpgradeModule) { }
    
    ngDoBootstrap() {
        // debugger;
        // this.upgrade.bootstrap(document.body, ['phonecatApp']);
    }
}