'use strict';

angular.module('jayMapApp')
  .controller('NavbarCtrl', function ($scope, $location, $translate, Auth) {
    $scope.menu = [{
      'title': 'All Shops',
      'link': '/shops'
    }, {
      'title': 'New Shop',
      'link': '/shops/new'
    }];

    $scope.changeLanguage = function (key) {
      $translate.use(key).then(function (key) {
        //console.log("Sprache zu " + key + " gewechselt.");
      }, function (key) {
        //console.log("Irgendwas lief schief.");
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
