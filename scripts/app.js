'use strict';

angular.module('twitter', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/theirs', {
        templateUrl: 'views/theirs.html',
        controller: 'TheirsCtrl'
      })
      .otherwise({ redirectTo: '/' });
  });

