'use strict';

angular.module('jayMapApp')
  .controller('EditshopCtrl', function ($scope, $stateParams, Shop, Geocoder) {
    //$scope.isLoggedIn = Auth.isLoggedIn;
    //$scope.isAdmin = Auth.isAdmin;
    //$scope.getCurrentUser = Auth.getCurrentUser;

    $scope.shop = Shop.get({ id: $stateParams.id }, function() {
      $scope.map.center.latitude = $scope.shop.latitude;
      $scope.map.center.longitude = $scope.shop.longitude;
    }); // get() returns a single shop

    $scope.map = {
      center: {
        latitude: 52.5167,
        longitude: 13.3833
      },
      zoom: 15,
      pan: false,
      options: {
        scrollwheel: false,
        draggable: false,
        disableDefaultUI: true
      }
    };

    $scope.showOnMap = function () {
      if ($scope.shop.address.length === '') {
        return;
      }

      Geocoder.latLngForAddress($scope.shop.address.replace(' ', '+'))
        .then(function (data) {
          $scope.shop.latitude = data.lat;
          $scope.shop.longitude = data.lng;
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

    $scope.saveShop = function (form) {
      $scope.submitted = true;

      if ($scope.shop === {}) {
        return;
      }

      if (form.$valid) {
        $scope.shop.$update(function () {
          $scope.submittedSuccess = true;
        });
      }
    };
  });
