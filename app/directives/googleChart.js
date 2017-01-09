'use strict';

angular.module('myApp')
    .directive('googleChart', function($compile){


        return {
            restrict: 'E',
             template: '<div google-chart chart="myChartObject" style="height:250px; width:90%;"></div>',
             controller: 'googleChartController',
             controllerAs: 'vm',
             transclude : true
        }
        
});

angular.module('myApp')
    .controller('googleChartController',function($scope, sharedWeatherData){

        var vm = this;
        vm.prepareData = prepareData;

        vm.obj = {
            "type": "LineChart",
            "displayed": false,
            "data": {
                "cols": [{
                            "label": "Day",
                            "type": "string"
                        },
                        {
                            "label": "High Temp",
                            "type": "number"
                        },
                        {
                            "label": "Low Temp",
                            "type": "number"
                        }
                    ],  
                    // Seven days forecast data module, will be replace when prepareData() get called.
                    "rows": [
                        {
                            "c": [{"v": ""},{"v": 19, "f": ""},{"v": 12, "f": ""}]
                        }
                    ]
            },
            "options": {
                "title": "7 Days Forecast",
                "colors": ["red","blue"],
                "isStacked": "true",
                "fill": 20,
                "displayExactValues": true,
                "vAxis": {
                    "title": "Temperature °F",
                    "gridlines": {
                        "count": 10
                    }
                },
                "hAxis": {
                    "title": "Date"
                },
                "tooltip": {
                    "isHtml": true
                }
            },
            "formatters": {},
            "view": {}
        }

        function prepareData(weatherData){

            var data = weatherData.item.forecast;
            var dataRows = [];

            for(var i=0; i<data.length-3; i++){
                var day = data[i].day;
                var highTemp = data[i].high;
                var lowTemp = data[i].low;
                var weatherDescription = data[i].text;

                var highTempTooltip = "↑ " + highTemp + "°F" + ", Low ↓: " + lowTemp + "°F" + ", " + weatherDescription;
                var lowTempTooltip = "↓ " + lowTemp + "°F" + ", High ↑: " + highTemp + "°F" + ", "+ weatherDescription;

                var dayObj = {
                    "c": [{"v": day},{"v": highTemp, "f": highTempTooltip},{"v": 12, "f": lowTempTooltip}]
                };

                dataRows.push(dayObj);
            }

            // Replace seven day forecast data module.
            vm.obj.data.rows = dataRows;
            $scope.myChartObject = vm.obj;
        }

        $scope.$watch(function () { 
            return sharedWeatherData.getWeatherData();
        },function (value) {
            if(value){
                $scope.weatherData = value;
                // Data prepare function
                vm.prepareData($scope.weatherData);
                
                console.log($scope.weatherData);
            }
        });
});


