'use strict';

angular.module('jayMapApp')
  .controller('NavbarCtrl', function ($scope, $location, $translate, Auth) {
    //$scope.menu = [{
    //  'title': 'All Shops',
    //  'link': '/shops'
    //}, {
    //  'title': 'New Shop',
    //  'link': '/shops/new'
    //}];

    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = true;
    });

    $translate(['ALL_SHOPS', 'NEW_SHOP']).then(function (translations) {
      $scope.menu = [{
        'title': translations.ALL_SHOPS,
        'link': '/shops'
      }, {
        'title': translations.NEW_SHOP,
        'link': '/shops/new'
      }];
    });

    $scope.changeLanguage = function (key) {
      $translate.use(key).then(function () {
        $translate(['ALL_SHOPS', 'NEW_SHOP']).then(function (translations) {
          $scope.menu = [{
            'title': translations.ALL_SHOPS,
            'link': '/shops'
          }, {
            'title': translations.NEW_SHOP,
            'link': '/shops/new'
          }];
        });
      });
    };

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
