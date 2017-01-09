'use strict';

angular.module('myApp')
    .directive('googleChart', function($compile){


        return {
            restrict: 'E',
            //  scope:  {
            //      weatherdata: '='
            //  },
         //   template: '<div>{{weatherdata.channel.description}}</div>',
         //    template: '<div ng-if="weatherdata" google-chart chart="myChartObject" style="height:250px; width:90%;"></div>',
             template: '<div google-chart chart="myChartObject" style="height:250px; width:90%;"></div>',
             controller: 'googleChartController',
             controllerAs: 'vm',
             transclude : true
        }
        
});

angular.module('myApp')
    .controller('googleChartController',function($scope, sharedWeatherData){

        var vm = this;

        vm.obj = {
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
                            "c": [{"v": "February"},{"v": 13},{"v": 16}]
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

     //   vm.obj.data.rows[0].c[1].v = 24;

        function prepareData(){

        }

        $scope.$watch(function () { 
            return sharedWeatherData.getWeatherData();
        },function (value) {
            if(value){
                $scope.weatherData = value;
                console.log($scope.weatherData);

               // vm.obj.data.rows[0].c[1].v = 3;

                $scope.myChartObject = vm.obj;
            }
        }
        );


        //this.obj["data"]["cols"][1].;

 //       $scope.myChartObject = this.obj;


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


