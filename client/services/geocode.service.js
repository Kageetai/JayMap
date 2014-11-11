'use strict';

angular.module('jayMapApp')
  .factory('Geocode', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://maps.googleapis.com/maps/api/geocode/json', {
//            key: 'AIzaSyB0StnBPFbNV6UE5c1fr5hYdU5ttqSSZZg'
//            params: { address: $scope.newShop.address.replace(' ', '+') }
      }, {
        'get': { method: 'GET' }
      });
  });
