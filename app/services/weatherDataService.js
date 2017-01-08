'use strick';

angular.module('myApp')
    .factory('weatherDataService',function($http){
        
        var getWeatherData = function(zipcode){
            var apiUrl = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' +zipcode+ '")&format=json&callback';
            
            return $http.get(apiUrl)
                        .then(function(response){
                            return response.data;
                        });
        };

        return {
            getWeatherData: getWeatherData
        };
});