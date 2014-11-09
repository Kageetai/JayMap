'use strict';

angular.module('jayMapApp')
  .controller('ShopsCtrl', function ($scope, $http, Auth) {
    $scope.message = 'Hello';

    $scope.shops = [];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $http.get('/api/shops').success(function (shops) {
      $scope.shops = shops;

      _.each($scope.shops, function (shop) {
        shop.icon = 'assets/images/logo-green.png';
        shop.closeClick = function () {
          shop.showWindow = false;
          $scope.$apply();
        };
        shop.onClicked = function () {
          $scope.selShop = shop;
        };
      });
    });

    $scope.deleteShop = function (shop) {
      $http.delete('/api/shops/' + shop._id);
      $scope.shops.splice($scope.shops.indexOf(shop), 1);
    };
  });
