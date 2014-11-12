'use strict';

angular.module('jayMapApp')
  .controller('MainCtrl', function ($scope, $http, Shop) {
    $scope.map = {
      center: {
        latitude: 52.5167,
        longitude: 13.3833
      },
      zoom: 11,
      pan: true,
      fit: true,
      doCluster: true,
      clusterOptions: {
        gridSize: 60,
        ignoreHidden: true,
        minimumClusterSize: 2,
        imageExtension: 'png',
        imagePath: 'assets/images/norev/cluster',
        imageSizes: [32],
        textColor: 'white'
      },
      draggable: true,
      options: {
        scrollwheel: true,
        disableDefaultUI: true
      }
    };

    $scope.shops = Shop.query(function () {
      _.each($scope.shops, function (shop) {
        shop.icon = 'assets/images/norev/logo-green.png';
        shop.onClicked = function () {
          $scope.selShop = shop;
        };
      });
    });

    $scope.addShop = function () {
      if ($scope.newShop === '') {
        return;
      }
      $http.post('/api/shops', {name: $scope.newShop});
      $scope.newShop = '';
    };

    $scope.deleteShop = function (shop) {
      $http.delete('/api/shops/' + shop._id);
    };
  });
