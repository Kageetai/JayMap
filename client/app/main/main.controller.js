'use strict';

angular.module('jayMapApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.map = {
      center: {
        latitude: 52.5167,
        longitude: 13.3833
      },
      zoom: 11,
      fit: true,
      doCluster: true,
      clusterOptions: {
        title: 'Hi I am a Cluster!',
        gridSize: 60,
        ignoreHidden: true,
        minimumClusterSize: 2,
        imageExtension: 'png',
        imagePath: 'assets/images/logo-green',
        imageSizes: [32],
        textColor: "white"
      },
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
      $http.post('/api/shops', {name: $scope.newShop});
      $scope.newShop = '';
    };

    $scope.deleteShop = function (shop) {
      $http.delete('/api/shops/' + shop._id);
    };
  });
