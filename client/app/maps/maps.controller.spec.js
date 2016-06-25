'use strict';

describe('Component: MapsComponent', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var MapsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MapsComponent = $componentController('MapsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
