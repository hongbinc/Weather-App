'use strick';

angular.module('myApp')
    .controller('mainController',function($scope){
        $scope.zipCode = "10001";
        $scope.message;

        $scope.search = function () {
            console.log(1);
        }

});
