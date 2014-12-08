'use strict';

angular.module('jayMapApp')
  .factory('Tag', function ($resource) {
    return $resource('/api/tags/:id', { id: '@_id' }, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }
    });
  });
