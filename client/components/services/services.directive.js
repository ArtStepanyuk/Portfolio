'use strict';

angular.module('portfolioApp')
  .directive('services', function() {
    return {
      templateUrl: 'components/services/services.html',
      restrict: 'E'
    };
  });
