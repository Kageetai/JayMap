'use strict';

angular.module('jayMapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new', {
        url: '/shop/new',
        templateUrl: 'app/shop/new/new.html',
        controller: 'NewCtrl',
        authenticate: true
      });
  });