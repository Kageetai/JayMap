'use strict';

angular.module('jayMapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shops', {
        url: '/shops',
        templateUrl: 'app/shops/shops.html',
        controller: 'ShopsCtrl'
      });
  });
