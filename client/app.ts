
import angular from 'angular';
import uiRouter from '@uirouter/angularjs'
import Common from './common/common';
import uiBootstrap from 'angular-ui-bootstrap'
import Components from './components/components';
import Services from './services/services'
import AppComponent from './app.component';
import { appConfig } from './constants/app.constant'


angular.module('app', [
  uiRouter,
  uiBootstrap,
  Common,
  Components,
  Services
])
.config(($locationProvider: any) => {
  "ngInject";
  $locationProvider.html5Mode(true).hashPrefix('!');
})
.component('app', AppComponent)
.constant('appConfig', appConfig)
