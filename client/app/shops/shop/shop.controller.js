'use strict';

angular.module('jayMapApp')
  .controller('ShopCtrl', function ($scope, $stateParams, Shop) {
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
  });
