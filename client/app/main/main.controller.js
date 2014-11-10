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
      options: {
        scrollwheel: true
      },
      searchbox: {
        template:'templates/searchbox.tpl.html',
        position:'top-left',
        events: {
          places_changed: function (searchBox) {
            var places = searchBox.getPlaces()
            if (places.length == 0) {
              return;
            }
            // For each place, get the icon, place name, and location.
            var newMarkers = [];
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0, place; place = places[i]; i++) {
              // Create a marker for each place.
              var marker = {
                id:i,
                place_id: place.place_id,
                name: place.name,
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng(),
                options: {
                  visible:false
                },
                templateurl:'window.tpl.html',
                templateparameter: place
              };
              newMarkers.push(marker);

              bounds.extend(place.geometry.location);
            }

            $scope.map.bounds = {
              northeast: {
                latitude: bounds.getNorthEast().lat(),
                longitude: bounds.getNorthEast().lng()
              },
              southwest: {
                latitude: bounds.getSouthWest().lat(),
                longitude: bounds.getSouthWest().lng()
              }
            }

            _.each(newMarkers, function(marker) {
              marker.closeClick = function() {
                $scope.selected.options.visible = false
                marker.options.visble = false;
                return $scope.$apply();
              };
              marker.onClicked = function() {
                $scope.selected.options.visible = false;
                $scope.selected = marker;
                $scope.selected.options.visible = true
              };
            });

            $scope.map.markers = newMarkers
          }
        }
      }
    };

    $scope.shops = [];

    $http.get('/api/shops').success(function (shops) {
      $scope.shops = shops;

      _.each($scope.shops, function (shop) {
        shop.icon = 'assets/images/norev/logo-green.png';
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
