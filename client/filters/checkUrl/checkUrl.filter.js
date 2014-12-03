'use strict';

angular.module('jayMapApp')
  .filter('checkUrl', function () {
    return function (input) {
      if (!input) {
        return;
      }
      if (!input.startsWith("http://"))
        return "http://" + input;
      return input;
    };
  });
