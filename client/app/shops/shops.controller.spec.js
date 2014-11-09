'use strict';

describe('Controller: ShopCtrl', function () {

  // load the controller's module
  beforeEach(module('jayMapApp'));

  var ShopsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopsCtrl = $controller('ShopsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
