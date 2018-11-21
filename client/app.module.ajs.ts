

import * as angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import Common from './common/common';
import 'angular-ui-bootstrap'
import Components from './components/components';
import Services from './services/services'
import AppComponent from './app.component';
import { appConfig } from './constants/app.constant'

const MODULE_NAME = 'app';
angular.module(MODULE_NAME, [
  uiRouter,
  'ui.bootstrap',
  Common,
  Components,
  Services
])
.config(['$locationProvider',
function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
}])
.component(MODULE_NAME, AppComponent)
.constant('appConfig', appConfig)

export default MODULE_NAME;
