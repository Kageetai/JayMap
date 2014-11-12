'use strict';

describe('Directive: clickToEdit', function () {

  // load the directive's module and view
  beforeEach(module('jayMapApp'));
  beforeEach(module('directives/clickToEdit/clickToEdit.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<click-to-edit></click-to-edit>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the clickToEdit directive');
  }));
});