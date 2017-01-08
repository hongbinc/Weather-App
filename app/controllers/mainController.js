'use strick';

angular.module('myApp')
    .controller('mainController',function($scope, $log, weatherDataService){
        $scope.zipCode = "10001";


        var onSearchComplete = function(data){
            if(data.query.results){
                console.log(data.query.results);
            }else{
                alert("Please Search By Zip Code or City.");
            }
            // else{
            //     // Yahoo API sometimes return null, so keep calling until success.
            //     $scope.search($scope.zipCode);
            // }
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
