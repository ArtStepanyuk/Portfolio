
// import Footer from './footer/footer.component';
import * as angular from 'angular'
import Navbar from './navbar/navbar.component';
import Footer from './footer/footer.component';
import uiRouter from '@uirouter/angularjs';
import { downgradeComponent } from '@angular/upgrade/static';
import { NavbarComponent } from '../../app/components/ng2/navbar'

const NavbarModule = angular.module('navbar', [uiRouter])
  .directive('appNavbar', downgradeComponent({component: NavbarComponent}))
  .name;
const FooterModule = angular.module('footer', []).component('appFooter', Footer).name;

const commonModule = angular.module('app.common', [
  NavbarModule,
  FooterModule
])
.name;

export default commonModule;
