'use strict';

angular.module('jayMapApp')
  .controller('NewCtrl', function ($scope, $http) {
      $scope.addShop = function() {
        $scope.submittedSuccess = true;

        if($scope.newShop === {}) {
          return;
        }
        $http.post('/api/shops', {
          name: $scope.newShop.name,
          address: $scope.newShop.address,
          latitude: $scope.newShop.latitude,
          longitude: $scope.newShop.longitude
        });
        $scope.newShop = {};
      };
  });
