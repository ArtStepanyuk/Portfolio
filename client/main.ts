import * as angular from "angular";
import "zone.js";
import "reflect-metadata";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { setAngularLib } from '@angular/upgrade/static';

setAngularLib(angular);
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));

