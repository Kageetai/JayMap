'use strict';

describe('Controller: EditshopCtrl', function () {

  // load the controller's module
  beforeEach(module('jayMapApp'));

  var EditshopCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditshopCtrl = $controller('EditshopCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
