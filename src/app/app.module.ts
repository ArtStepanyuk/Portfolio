import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import moduleName from "./app.module.ajs";

import { NavbarComponent } from "./components/ng2/navbar";
import { HomeNgComponent } from "./components/ng2/home";
import { FeaturesNgComponent } from "./components/ng2/features";
import { ContactsNgComponent } from "./components/ng2/contact";
import { SidebarNgComponent } from "./components/ng2/sidebar";

@NgModule({
  declarations: [
    SidebarNgComponent,
    NavbarComponent,
    HomeNgComponent,
    FeaturesNgComponent,
    ContactsNgComponent
  ],
  entryComponents: [
    SidebarNgComponent,
    NavbarComponent,
    HomeNgComponent,
    FeaturesNgComponent,
    ContactsNgComponent
  ],
  imports: [BrowserModule, UpgradeModule]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [moduleName], {
      strictDi: true
    });
  }
}
