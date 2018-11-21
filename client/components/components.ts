import Layout from './layout/layout';
import * as angular from 'angular'

let componentModule = angular.module('app.components', [
  Layout
])
.name;

export default componentModule;
