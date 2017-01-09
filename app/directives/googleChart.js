'use strict';

angular.module('myApp')
    .directive('googleChart', function(){
        return {
            restrict: 'E',
            scope:  {
                weatherdata: '='
            },
         //   template: '<div>{{weatherdata.channel.description}}</div>',
            template: '<div google-chart chart="myChartObject" style="height:250px; width:90%;"></div>',
            controller: 'googleChartController'
        }
        
});

angular.module('myApp')
    .controller('googleChartController',function($scope, sharedWeatherData){

        this.weatherData = sharedWeatherData.getWeatherData();
        console.log(11111);
        console.log(this.weatherData);
        console.log(11111);

        this.obj = {
            "type": "LineChart",
            "displayed": false,
            "data": {
                "cols": [{
                            "label": "Day",
                            "type": "string"
                        },
                        {
                            "label": "Partly Cloudy",
                            "type": "number"
                        },
                        {
                            "label": "Low Temp",
                            "type": "number"
                        }
                    ],
                    "rows": [
                        {
                            "c": [{"v": "January"},{"v": 19, "f": "↑ Higt 42, ↓ Low 12"},{"v": 12, "f": "Ony 12 items"}]
                        },
                        {
                            "c": [{"v": "February"},{"v": 13},{"v": 1}]
                        },
                        {
                            "c": [{"v": "March"}, {"v": 24},{"v": 5}]
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

        this.obj["data"]["cols"][1].

        $scope.myChartObject = this.obj;


        // $scope.myChartObject = {
        //     "type": "LineChart",
        //     "displayed": false,
        //     "data": {
        //         "cols": [{
        //                     "label": "Day",
        //                     "type": "string"
        //                 },
        //                 {
        //                     "label": "Partly Cloudy",
        //                     "type": "number"
        //                 },
        //                 {
        //                     "label": "Low Temp",
        //                     "type": "number"
        //                 }
        //             ],
        //             "rows": [
        //                 {
        //                     "c": [{"v": "January"},{"v": 19, "f": "↑ Higt 42, ↓ Low 12"},{"v": 12, "f": "Ony 12 items"}]
        //                 },
        //                 {
        //                     "c": [{"v": "February"},{"v": 13},{"v": 1}]
        //                 },
        //                 {
        //                     "c": [{"v": "March"}, {"v": 24},{"v": 5}]
        //                 }
        //             ]
        //     },
        //     "options": {
        //         "title": "7 Days Forecast",
        //         "colors": ["red","blue"],
        //         "isStacked": "true",
        //         "fill": 20,
        //         "displayExactValues": true,
        //         "vAxis": {
        //             "title": "Temperature °F",
        //             "gridlines": {
        //                 "count": 10
        //             }
        //         },
        //         "hAxis": {
        //             "title": "Date"
        //         },
        //         "tooltip": {
        //             "isHtml": true
        //         }
        //     },
        //     "formatters": {},
        //     "view": {}
        // }
        
});


