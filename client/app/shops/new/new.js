'use strict';

angular.module('jayMapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new', {
        url: '/shops/new',
        templateUrl: 'app/shops/new/new.html',
        controller: 'NewCtrl',
        authenticate: true
      });
  });
