//SOURCE: http://icelab.com.au/articles/levelling-up-with-angularjs-building-a-reusable-click-to-edit-directive/

'use strict';

angular.module('jayMapApp')
  .directive('clickToEdit', function () {
    return {
      templateUrl: 'directives/clickToEdit/clickToEdit.html',
      restrict: 'A',
      replace: true,
      scope: {
        value: '=clickToEdit',
        method: '&onSave',
        textarea: '@useTextarea'
      },
      controller: function($scope, $attrs) {
        $scope.view = {
          editableValue: $scope.value,
          editorEnabled: false
        };

        $scope.enableEditor = function() {
          $scope.view.editorEnabled = true;
          $scope.view.editableValue = $scope.value;
        };

        $scope.disableEditor = function() {
          $scope.view.editorEnabled = false;
        };

        $scope.save = function() {
          $scope.value = $scope.view.editableValue;
          $scope.disableEditor();
          $scope.method();
        };
      }
    };
  });
