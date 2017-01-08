'use strict';

angular.module('myApp')
    .directive('googleChart', function(){
        return {
            restrict: 'E',
            scope:  {
                weatherdata: '='
            },
         //   template: '<div>{{weatherdata.channel.description}}</div>',
            template: '<div google-chart chart="myChartObject" style="height:130px; width:100%;"></div>',
            controller: 'googleChartController'
        }
        
});

angular.module('myApp')
    .controller('googleChartController',function($scope){
        console.log($scope.weatherdata);

        $scope.myChartObject = {};
        $scope.myChartObject.type = "Gauge";

        $scope.myChartObject.options = {
            width: 400,
            height: 120,
            redFrom: 90,
            redTo: 100,
            yellowFrom: 75,
            yellowTo: 90,
            minorTicks: 5
        };

        $scope.myChartObject.data = [
            ['Label', 'Value'],
            ['Memory', $scope.weatherdata],
            ['CPU', 55],
            ['Network', 68]
        ];
        
});


