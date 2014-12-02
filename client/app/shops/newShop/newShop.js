'use strict';

angular.module('jayMapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newShop', {
        url: '/shops/new',
        templateUrl: 'app/shops/newShop/newShop.html',
        controller: 'NewShopCtrl',
        authenticate: true
      });
  });
