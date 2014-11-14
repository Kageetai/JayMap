'use strict';

describe('Service: Geocoder', function () {

  // load the service's module
  beforeEach(module('jayMapApp'));

  // instantiate service
  var Geocoder;
  beforeEach(inject(function (_Geocoder_) {
    Geocoder = _Geocoder_;
  }));

  it('should do something', function () {
    expect(!!Geocoder).toBe(true);
  });

});
