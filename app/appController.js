var myAngularController = angular.module('myAngularApp', []);

myAngularController.controller('MainController', ['$scope', function($scope) {
    $scope.message = "Hey ! All Welcome to AngularJS !";

    // $scope.names= ["John", "Mary", "Peter", "Sally", "Jane"];   

    // $scope.names = [
    //     {
    //         name: "John", age: 25
    //     },
    //     {
    //         name: "Mary", age: 30
    //     },
    //     {
    //         name: "Peter", age: 35
    //     },
    //     {
    //         name: "Sally", age: 28
    //     },
    //     {
    //         name: "Jane", age: 22
    //     }
    // ];

    $scope.names = [
        {
            name: "John",
            belt: "Black",
            rate: 50,
            available: true
        },
        {
            name: "Mary",
            belt: "Brown",
            rate: 40,
            available: false
        }, 
        {
            name: "Peter",
            belt: "Blue",
            rate: 30,
            available: true
        },
        {
            name: "Sally",
            belt: "Green",
            rate: 20,
            available: false
        }
    ]
}]);

