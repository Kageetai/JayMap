'use strict';

angular.module('jayMapApp')
  .controller('NewCtrl', function ($scope, $http, Shop, Geocoder) {
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

    $scope.newShop = new Shop();

    $scope.showOnMap = function () {
      if ($scope.newShop.address.length === '') {
        return;
      }

      Geocoder.latLngForAddress($scope.newShop.address.replace(' ', '+'))
        .then(function (data) {
          $scope.newShop.location.latitude = data.lat;
          $scope.newShop.location.longitude = data.lng;
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
        $scope.newShop.$save(function() {
          $scope.newShop = new Shop();
          $scope.submittedSuccess = true;
        });
      }
    };
  }
)
;
