'use strict';

angular.module('jayMapApp')
  .filter('checkUrl', function () {
    return function (input) {
      if (!input) {
        return;
      }
      return !input.startsWith('http://') ? 'http://' + input : input;
    };
  });
