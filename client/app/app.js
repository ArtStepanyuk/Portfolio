'use strict';

angular.module('portfolioApp', [
  'portfolioApp.auth',
  'portfolioApp.admin',
  'portfolioApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'oitozero.ngSweetAlert',
  'jkuri.gallery'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
