'use strict';

describe('Directive: clickToEdit', function () {

  // load the directive's module and view
  beforeEach(module('jayMapApp', function ($provide, $translateProvider) {

    $provide.factory('customLoader', function ($q) {
      return function () {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      };
    });

    $translateProvider.useLoader('customLoader');

  }));

  beforeEach(module('directives/clickToEdit/clickToEdit.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div click-to-edit></div>');
    element = $compile(element)(scope);
    scope.$apply();
    //expect(element.text()).toBe('this is the clickToEdit directive');
    expect(element.find('input').hasClass('form-control')).toBe(true);
  }));
});
