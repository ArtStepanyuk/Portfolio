
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import moduleName from './app.module.ajs';

import {ListComponent } from './components/ng2/list'
@NgModule({
  declarations: [
    ListComponent
  ],
  entryComponents: [ListComponent],
    imports: [
        BrowserModule,
        UpgradeModule,
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap(){
        this.upgrade.bootstrap(document.documentElement, [moduleName], {strictDi: true});
    }
}
