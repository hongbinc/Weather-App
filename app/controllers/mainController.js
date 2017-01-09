'use strict';

angular.module('myApp')
    .controller('mainController',function($scope, $log, weatherDataService, sharedWeatherData){
        $scope.zipCode = "10001";


        var onSearchComplete = function(data){
            if(data.query.results){
                sharedWeatherData.setWeatherData(data.query.results.channel);
            }
            else{
                // Yahoo API sometimes return null, so keep calling until success.
                $scope.search($scope.zipCode);
            }
        };

        var onError = function(data){
            $scope.error = "No data found.";
        };

        $scope.search = function (zipCode) {
            $log.info("Searching weather for " + zipCode);

            weatherDataService.getWeatherData(zipCode).then(onSearchComplete, onError);
        };
        
        $scope.search($scope.zipCode);
});
