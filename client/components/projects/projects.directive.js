'use strict';

angular.module('portfolioApp')
  .directive('projects', function() {
    return {
      templateUrl: 'components/projects/projects.html',
      restrict: 'E'
    };
  });
