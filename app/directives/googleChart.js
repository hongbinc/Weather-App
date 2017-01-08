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
    .controller('googleChartController',function($scope, sharedWeatherData){

        var weatherData = sharedWeatherData.getWeatherData();
        console.log(11111);
        console.log(sharedWeatherData.getWeatherData());
        console.log(11111);

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
            ['Memory', $scope.weatherData],
            ['CPU', 55],
            ['Network', 68]
        ];
        
        console.log(sharedWeatherData.getWeatherData());
        console.log(sharedWeatherData.getWeatherData());


});


