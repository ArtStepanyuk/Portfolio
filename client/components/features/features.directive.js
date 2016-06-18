'use strict';

angular.module('portfolioApp')
  .directive('features', function() {
    return {
      templateUrl: 'components/features/features.html',
      restrict: 'E'
    };
  });
