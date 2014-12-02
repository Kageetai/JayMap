'use strict';

describe('Controller: NewShopCtrl', function () {

  // load the controller's module
  beforeEach(module('jayMapApp'));

  var NewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewCtrl = $controller('NewShopCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
