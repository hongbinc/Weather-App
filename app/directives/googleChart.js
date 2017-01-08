'use strict';

angular.module('myApp')
    .directive('googleChart', function($scope, mainController){
        return {
            restrict: 'E',
            scope: {weatherData: '='},
            template: '<div>{{weatherData}}</div>',
            controller: function($scopt) {
                
            }
        }
        
});
