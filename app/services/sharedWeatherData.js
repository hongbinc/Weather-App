'use strict';

angular.module('myApp')
    .factory('sharedWeatherData', function(){
        var weatherData;

        var setWeatherData = function(data){
            weatherData = data;
        }

        var getWeatherData = function(){
            return weatherData;
        }

        return {
            setWeatherData: setWeatherData,
            getWeatherData: getWeatherData
        };
});