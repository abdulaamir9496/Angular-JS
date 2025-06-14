var myAngularApp = angular.module('myAngularApp', ['ngRoute', 'ngAnimate']);

myAngularApp.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

myAngularApp.directive('randomName', [function() {
    return {
        restrict: 'E',
        scope: {
            names: '=', // Bind to the names array from the parent scope
            title: '=', // Bind to the title attribute from the parent scope
        },
        templateUrl: 'views/random.html'
        transclude: true, // Allow transclusion of content inside the directive
        replace: true, // Replace the directive element with the template
        controller: function($scope) {
            // Generate a random name from the names array
            $scope.randomName = function() {
                if ($scope.names && $scope.names.length > 0) {
                    return $scope.names[Math.floor(Math.random() * $scope.names.length)];
                }
                return 'No names available';
            };
        },
        
        // template: '<h1>Random Name: {{randomName}}</h1>',
        // link: function(scope, element, attrs) {
        //     var names = ['John', 'Mary', 'Peter', 'Sally', 'Jane'];
        //     scope.randomName = names[Math.floor(Math.random() * names.length)];
        // }
    }
}]);

myAngularApp.controller('MainController', ['$scope','$http',  function ($scope, $http) {
    $scope.removeName = function (name) {
        var removedName = $scope.names.indexOf(name);
        $scope.names.splice(removedName, 1);
    };
    $scope.addName = function () {
        $scope.names.push({
            name: $scope.newname.name,
            age: $scope.newname.age,
            belt: $scope.newname.belt,
            rate: parseInt($scope.newname.rate),
            available: true
        });
        $scope.newname.name = '';
        $scope.newname.age = '';
        $scope.newname.belt = '';
        $scope.newname.rate = '';
    };

    $scope.removeAll = function () {
        $scope.names = [];
    };

    //We don't need to use, when we are using http request to fetch data from server
    // $scope.names = [
    //     { name: 'Aamir', age: 28, belt: 'black', rate: 50, available: true },
    //     { name: 'Khizer', age: 25, belt: 'red', rate: 40, available: false },
    //     { name: 'Ibrahim', age: 30, belt: 'blue', rate: 60, available: true }
    // ];

    // Fetching data from server using $http service
    $http.get('data/names.json').success(function (data){
        $scope.names = data;
    });

    // $http.get('data/names.json')
    //     .then(function (response) {
    //         $scope.names = response.data;
    //     }, function (error) {
    //         console.error('Error fetching data:', error);
    //     });

    // $scope.order = 'name';
    // console.log(angular.toJson($scope.names));
}]);

// var myAngularController = angular.module('myAngularApp', []);

// myAngularController.controller('MainController', ['$scope', function($scope) {
//     $scope.message = "Hey ! All Welcome to AngularJS !";

//     // $scope.names= ["John", "Mary", "Peter", "Sally", "Jane"];

//     // $scope.names = [
//     //     {
//     //         name: "John", age: 25
//     //     },
//     //     {
//     //         name: "Mary", age: 30
//     //     },
//     //     {
//     //         name: "Peter", age: 35
//     //     },
//     //     {
//     //         name: "Sally", age: 28
//     //     },
//     //     {
//     //         name: "Jane", age: 22
//     //     }
//     // ];

//     $scope.names = [
//         {
//             name: "John",
//             belt: "Black",
//             rate: 50,
//             available: true
//         },
//         {
//             name: "Mary",
//             belt: "Brown",
//             rate: 40,
//             available: false
//         },
//         {
//             name: "Peter",
//             belt: "Blue",
//             rate: 30,
//             available: true
//         },
//         {
//             name: "Sally",
//             belt: "Green",
//             rate: 20,
//             available: false
//         }
//     ]
// }]);
