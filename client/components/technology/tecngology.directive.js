'use strict';

angular.module('portfolioApp')
  .directive('technology', function() {
    return {
      templateUrl: 'components/technology/technology.html',
      restrict: 'E'
    };
  });
