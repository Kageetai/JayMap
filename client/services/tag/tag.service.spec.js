'use strict';

describe('Service: Tag', function () {

  // load the service's module
  beforeEach(module('jayMapApp'));

  // instantiate service
  var tag;
  beforeEach(inject(function (_tag_) {
    Tag = _Tag_;
  }));

  it('should do something', function () {
    expect(!!Tag).toBe(true);
  });

});
