'use strict';

angular.module('portfolioApp')
  .directive('sideBar', function() {
    return {
      templateUrl: 'components/sidebar/sidebar.html',
      restrict: 'E',
      controller: function ($window) {
        $window.scrollTo(0, 0);
      }
    };
  });
