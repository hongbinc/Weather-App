'use strict';

angular.module('myApp')
    .controller('mainController',function($scope, $log, weatherDataService, sharedWeatherData){
        
        // Set default zipcode to New York
        $scope.zipCode = "10001";

        $scope.currentWeather = {}; 

        function prepareCurrentWeatherData(data){
            setLocation(data);
            setCurrentDescription(data);
            setTemp(data);
        }


        function setTemp(data){
            var currentTemp = data.item.condition.temp;
            var todayHighTemp = data.item.forecast[0].high;
            var todayLowTemp = data.item.forecast[0].low;
            
            $scope.currentWeather.currentTemp = currentTemp;
            $scope.currentWeather.todayHighTemp = todayHighTemp;
            $scope.currentWeather.todayLowTemp = todayLowTemp;
        }

        function setCurrentDescription(data){
            var currentDescription = data.item.condition.text;
            $scope.currentWeather.currentDescription = currentDescription;
        }

        function setLocation(data){
            var location = data.location;
            var country = location.country === "United States" ? "USA" : location.country;
            var address = location.city + ", " + location.region +", " + country;
            
            $scope.currentWeather.location = address;
        }
        
        var onSearchComplete = function(data){
            if(data.query.results){
                var data = data.query.results.channel;
                sharedWeatherData.setWeatherData(data);

                prepareCurrentWeatherData(data);
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
