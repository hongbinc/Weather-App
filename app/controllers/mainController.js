'use strick';

angular.module('myApp')
    .controller('mainController',function($scope, $log, weatherDataService){
        $scope.zipCode = "10001";

        var onSearchComplete = function(data){
            console.log(data);
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
