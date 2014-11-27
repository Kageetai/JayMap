'use strict';

angular.module('jayMapApp')
  .controller('ShopsCtrl', function ($scope, $http, Auth, Shop) {
    $scope.message = 'Hello';

    $scope.shops = [];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.shops = Shop.query(function () {
      _.each($scope.shops, function (shop) {
        shop.icon = 'assets/images/norev/logo-green.png';
        shop.onClicked = function () {
          $scope.selShop = shop;
        };
      });
    });

    $scope.deleteShop = function (shop) {
      shop.$delete(function() {
        $scope.shops.splice($scope.shops.indexOf(shop), 1);
      });
    };
  });
