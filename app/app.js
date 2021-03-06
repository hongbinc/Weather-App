(function () {
  'use strict';
  // Main module of the weather application
  angular
    .module('myApp', [
      'ngRoute',
      'googlechart'
    ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/main', {
          templateUrl: 'main.html',
          controller: 'mainController'
        })
        .otherwise({
          redirectTo: '/main'
        });
    }]);
})();