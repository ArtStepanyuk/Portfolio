'use strict';

angular.module('portfolioApp')
  .directive('contact', function() {
    return {
      templateUrl: 'components/contact/contact.html',
      restrict: 'E'
    };
  });
