'use strict';

angular.module('jayMapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shop', {
        url: '/shops/:id',
        templateUrl: 'app/shops/shop/shop.html',
        controller: 'ShopCtrl'
      });
  });