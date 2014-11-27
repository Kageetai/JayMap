'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jayMapApp', function ($provide, $translateProvider) {

    $provide.factory('customLoader', function ($q) {
      return function () {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      };
    });

    $translateProvider.useLoader('customLoader');

  }));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/shops')
      .respond([{
        name: 'Kunstspätkauf',
        address: 'Schlesische Str. 19, 10997 Berlin',
        stock: 100,
        latitude: 52.49861,
        longitude: 13.446149999999989,
        createdAt: '2013-10-22T09:34:23.519Z',
        updatedAt: '2013-10-31T13:24:23.236Z'
      },
      {
        name: 'Fulda Getränke',
        address: 'Fuldastr. 53, 12043 Berlin-Neukölln',
        stock: 100,
        latitude: 52.48369,
        longitude: 13.435249999999996,
        createdAt: '2013-10-22T09:30:15.516Z',
        updatedAt: '2013-10-30T15:20:53.392Z'
      },
      {
        name: 'Fachschaft Charité im Hexenhaus',
        address: 'Philippstraße 12 10115 Berlin',
        description: 'Lorem Ipsum',
        stock: 100,
        latitude: 52.5250862,
        longitude: 13.38128329999995,
        createdAt: '2013-11-04T08:55:04.063Z',
        updatedAt: '2013-11-04T08:55:04.715Z'
      }]);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of shops to the scope', function () {
    $httpBackend.flush();
    expect(scope.shops.length).toBe(3);
  });
});
