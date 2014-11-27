'use strict';

angular.module('jayMapApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngStorage',
  'pascalprecht.translate',
  'uiGmapgoogle-maps'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .config(function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/i18n/lang-',
      suffix: '.json'
    })
    .registerAvailableLanguageKeys(['en', 'de'], {
      'en_US': 'en',
      'en_UK': 'en',
      'de_DE': 'de',
      'de_CH': 'de'
    })
    .fallbackLanguage('en')
    .useLocalStorage()
    .determinePreferredLanguage();
  })

  .config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
    GoogleMapApi.configure({
      key: 'AIzaSyBPuXezFtTaSW78idlAzQw_11VsegsO5LM',
      v: '3.17',
      libraries: 'places'
    });
  }])

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });

    //$rootScope.$on('$stateChangeSuccess', function (event, next) {
    //  // collapse navbar
    //  angular.element('.navbar-collapse').collapse('hide');
    //});
  });
