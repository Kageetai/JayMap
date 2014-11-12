'use strict';

angular.module('jayMapApp')
  .controller('NewCtrl', function ($scope, $http, Geocoder) {
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

      Geocoder.latLngForAddress($scope.newShop.address.replace(' ', '+'))
        .then(function (data) {
          $scope.newShop.latitude = data.lat;
          $scope.newShop.longitude = data.lng;
          $scope.map.center.latitude = data.lat;
          $scope.map.center.longitude = data.lng;
          $scope.map.zoom = 15;
        }, function (error) {
          if (error.type === 'zero') {
            $scope.submittedNoLocation = true;
          } else {
            $scope.submittedError = true;
          }
        });
    };

    $scope.addShop = function (form) {
      $scope.submitted = true;

      if ($scope.newShop === {}) {
        return;
      }

      if (form.$valid) {
        $http.post('/api/shops', {
          name: $scope.newShop.name,
          address: $scope.newShop.address,
          latitude: $scope.newShop.latitude,
          longitude: $scope.newShop.longitude
        }).success(function () {
          $scope.newShop = {};
          $scope.submittedSuccess = true;
        });
      }
    };
  }
)
;
