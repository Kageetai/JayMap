'use strict';

describe('Filter: checkUrl', function () {

  // load the filter's module
  beforeEach(module('jayMapApp'));

  // initialize a new instance of the filter before each test
  var checkUrl;
  beforeEach(inject(function ($filter) {
    checkUrl = $filter('checkUrl');
  }));

  it('should return the input prefixed with "checkUrl filter:"', function () {
    var text = 'angularjs';
    expect(checkUrl(text)).toBe('checkUrl filter: ' + text);
  });

});
