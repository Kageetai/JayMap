'use strict';

describe('Controller: ShopCtrl', function () {

  // load the controller's module
  beforeEach(module('jayMapApp'));

  var ShopCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopCtrl = $controller('ShopCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
