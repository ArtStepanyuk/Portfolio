'use strict';

angular.module('portfolioApp')
  .directive('home', function() {
    return {
      templateUrl: 'components/home/home.html',
      restrict: 'E'
    };
  });
