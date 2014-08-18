'use strict';

angular.module('jayMapApp')
  .controller('MainCtrl', function ($scope, $http) {
      $scope.map = {
        center: {
          latitude: 52.5167,
          longitude: 13.3833
        },
        zoom: 10,
        draggable: true,
        options: {
          scrollwheel: true
        }
      };

    $scope.shops = [];

    $http.get('/api/shops').success(function(shops) {
      $scope.shops = shops;
    });

    $scope.addShop = function() {
      if($scope.newShop === '') {
        return;
      }
      $http.post('/api/shops', { name: $scope.newShop });
      $scope.newShop = '';
    };

    $scope.deleteShop = function(shop) {
      $http.delete('/api/shops/' + shop._id);
    };
  });