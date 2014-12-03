'use strict';

angular.module('jayMapApp')
  .controller('ShopCtrl', function ($scope, $stateParams, Auth, Shop) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.shop = Shop.get({ id: $stateParams.id }, function() {
      $scope.map.center.latitude = $scope.shop.latitude;
      $scope.map.center.longitude = $scope.shop.longitude;
      if ($scope.shop.stock >= 2) {
        $scope.shop.stock = 2;
      } //TODO better solution?
    }); // get() returns a single shop

    $scope.map = {
      center: {
        latitude: 52.5167,
        longitude: 13.3833
      },
      zoom: 15,
      pan: false,
      options: {
        scrollwheel: true,
        draggable: true,
        disableDefaultUI: true
      }
    };

    $scope.deleteShop = function (shop) {
      shop.$delete();
    };

    $scope.updateStock = function () {
      $scope.shop.$update(function () {
        console.log('shop.stock updated');
      })
    };
  });
