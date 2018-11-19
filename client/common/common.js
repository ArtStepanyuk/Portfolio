import angular from 'angular';
import Footer from './footer/footer.component';
import Navbar from './navbar/navbar.component';
import uiRouter from '@uirouter/angularjs';

let NavbarModule = angular.module('navbar', [uiRouter]).component('appNavbar', Navbar).name;
let FooterModule = angular.module('footer', []).component('appFooter', Footer).name;

let commonModule = angular.module('app.common', [
  NavbarModule,
  FooterModule
])
.name;

export default commonModule;
