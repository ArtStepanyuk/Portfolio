
// import Footer from './footer/footer.component';
import * as angular from 'angular'
import Navbar from './navbar/navbar.component';
import Footer from './footer/footer.component';
import uiRouter from '@uirouter/angularjs';

// declare var angular: angular.IAngularStatic;

let NavbarModule = angular.module('navbar', [uiRouter]).component('appNavbar', Navbar).name;
let FooterModule = angular.module('footer', []).component('appFooter', Footer).name;

let commonModule = angular.module('app.common', [
  NavbarModule,
  FooterModule
])
.name;

export default commonModule;
