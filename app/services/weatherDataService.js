(function () {
    'use strict';
    angular.module('myApp')
        .factory('weatherDataService',function($http, $q){
            
            var getWeatherData = function(zipcode){
                var apiUrl = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+zipcode+'")&format=json';
                
                var promisedWeatherData = $q.defer();

                $http.get(apiUrl).then(function(response){
                    var weatherData = response.data;
                    promisedWeatherData.resolve(weatherData);
                },function (error) {
                    promisedWeatherData.reject(error);
                });
                return promisedWeatherData.promise;
            };

            return {
                getWeatherData: getWeatherData
            };
    });
})();
