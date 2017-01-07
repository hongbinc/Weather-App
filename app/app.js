'use strict';

// Main module of the weather application
angular
  .module('myApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
