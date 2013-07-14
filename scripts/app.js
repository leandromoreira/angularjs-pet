'use strict';

angular.module('twitter', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({ redirectTo: '/' });
  });

