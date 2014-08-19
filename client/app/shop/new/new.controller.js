'use strict';

angular.module('jayMapApp')
  .controller('NewCtrl', function ($scope, $http) {
    $scope.addShop = function () {
      $scope.submitted = true;

      if ($scope.newShop === {}) {
        return;
      }

      if (form.$valid) {
        $http({
          method: 'get',
          url: 'http://maps.googleapis.com/maps/api/geocode/json',
          key: 'AIzaSyB0StnBPFbNV6UE5c1fr5hYdU5ttqSSZZg',
          params: { address: $scope.newShop.address.replace(' ', '+') }
        }).success(function (data, status) {
          if (data.status === 'OK') {
            $scope.newShop.latitude = data.results[0].geometry.location.lat;
            $scope.newShop.longitude = data.results[0].geometry.location.lng;

            $http.post('/api/shops', {
              name: $scope.newShop.name,
              address: $scope.newShop.address,
              latitude: $scope.newShop.latitude,
              longitude: $scope.newShop.longitude
            }).success(function () {
              $scope.newShop = {};
              $scope.submittedSuccess = true;
            });
          } else if (data.status === 'ZERO_RESULTS') {
            $scope.submittedNoLocation = true;
          } else {
            $scope.submittedError = true;
          }
        });
      }
    };
  });
