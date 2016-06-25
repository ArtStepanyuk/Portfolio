'use strict';

angular.module('portfolioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('maps', {
        url: '/maps',
        template: '<maps></maps>'
      });
  });
