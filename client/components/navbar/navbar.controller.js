'use strict';

angular.module('jayMapApp')
  .controller('NavbarCtrl', function ($scope, $location, locale, localeSupported, localeEvents, Auth) {
    $scope.supportedLang = localeSupported;
    $scope.localeData = {
      'en-US': {
        flagClass: 'flag-us',
        langDisplayText: 'English'
      },
      'de-DE': {
        flagClass: 'flag-de',
        langDisplayText: 'German'
      }
    };

    $scope.setLocale = function (loc) {
      locale.setLocale(loc);
    };

    locale.ready('common').then(function () {
      $scope.flagClass = $scope.localeData[locale.getLocale()].flagClass;
      $scope.langDisplayText = $scope.localeData[locale.getLocale()].langDisplayText;
    });

    $scope.$on(localeEvents.localeChanges, function (event, data) {
      $scope.flagClass = $scope.localeData[data].flagClass;
      $scope.langDisplayText = $scope.localeData[data].langDisplayText;
    });

    $scope.menu = [{
      'title': 'All Shops',
      'link': '/shops'
    }, {
      'title': 'New Shop',
      'link': '/shops/new'
    }];

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
