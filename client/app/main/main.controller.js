'use strict';

angular.module('jayMapApp')
    .controller('MainCtrl', function ($scope, $http) {
      $scope.map = {
        center: {
          latitude: 52.5167,
          longitude: 13.3833
        },
        zoom: 11,
        draggable: true,
        options: {
          scrollwheel: true
        }
      };

      $scope.shops = [];

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

      $scope.addShop = function () {
        if ($scope.newShop === '') {
          return;
        }
        $http.post('/api/shops', { name: $scope.newShop });
        $scope.newShop = '';
      };

      $scope.deleteShop = function (shop) {
        $http.delete('/api/shops/' + shop._id);
      };
    });
