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
        gridSize: 40,
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
      },
      searchbox: {
        template:'templates/searchbox.tpl.html',
        position:'top-right',
        events: {
          places_changed: function (searchBox) {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
              return;
            }

            $scope.map.center.latitude = places[0].geometry.location.lat();
            $scope.map.center.longitude = places[0].geometry.location.lng();
            $scope.map.zoom = 15;

            bounds.extend(place[0].geometry.location);

            $scope.map.bounds = {
              northeast: {
                latitude: bounds.getNorthEast().lat(),
                longitude: bounds.getNorthEast().lng()
              },
              southwest: {
                latitude: bounds.getSouthWest().lat(),
                longitude: bounds.getSouthWest().lng()
              }
            };
          }
        }
      }
    };

    $scope.shops = Shop.query(function () {
      _.each($scope.shops, function (shop) {
        shop.icon = 'assets/images/norev/logo-green.png';
        shop.onClicked = function () {
          $scope.selShop = shop;
        };
        shop.closeClick = function() {
          $scope.selShop = {};
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
