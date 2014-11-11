'use strict';

angular.module('jayMapApp')
  .controller('NewCtrl', function ($scope, $http, Geocode) {
    $scope.map = {
      center: {
        latitude: 52.5167,
        longitude: 13.3833
      },
      zoom: 11,
      pan: false,
      options: {
        scrollwheel: false,
        draggable: false,
        disableDefaultUI: true
      }
    };

    $scope.newShop = { _id: 1 };

    $scope.showOnMap = function () {
      if ($scope.newShop.address.length === '') {
        return;
      }

      Geocode.get({
        address: $scope.newShop.address.replace(' ', '+')
      }).$promise.then(function (data) {
          if (data.status === 'OK') {
            $scope.newShop.latitude = data.results[0].geometry.location.lat;
            $scope.newShop.longitude = data.results[0].geometry.location.lng;
            $scope.map.center.latitude = data.results[0].geometry.location.lat;
            $scope.map.center.longitude = data.results[0].geometry.location.lng;
            $scope.map.zoom = 15;
          } else if (data.status === 'ZERO_RESULTS') {
            $scope.submittedNoLocation = true;
          } else {
            $scope.submittedError = true;
          }
        }, function () {
          $scope.submittedError = true;
        });
    };

    $scope.addShop = function (form) {
      $scope.submitted = true;

      if ($scope.newShop === {}) {
        return;
      }

      if (form.$valid) {
        Geocode.get({
          address: $scope.newShop.address.replace(' ', '+')
        }).$promise.then(function (data) {
            if (data.status === 'OK') {
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
          }, function () {
            $scope.submittedError = true;
          });
      }
    };
  }
)
;
