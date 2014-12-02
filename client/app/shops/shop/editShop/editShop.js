'use strict';

angular.module('jayMapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editShop', {
        url: '/shops/:id/edit',
        templateUrl: 'app/shops/shop/editShop/editShop.html',
        controller: 'EditshopCtrl',
        admin: true
      });
  });
