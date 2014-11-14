'use strict';

angular.module('jayMapApp')
  .factory('Shop', function ($resource) {
    return $resource('/api/shops/:id', { id: '@_id' }, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }
    });
  });
