// Define the AngularJS app and dependencies
var myAngularApp = angular.module('myAngularApp', ['ngRoute', 'ngAnimate']);

// Configure routes
myAngularApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'ContactController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'DirectoryController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

// Custom directive: randomName
myAngularApp.directive('randomName', [function () {
    return {
        restrict: 'E',
        scope: {
            names: '=',     // Two-way binding for names array
            title: '='      // Two-way binding for title
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function ($scope) {
            $scope.randomName = function () {
                if ($scope.names && $scope.names.length > 0) {
                    $scope.random = $scope.names[Math.floor(Math.random() * $scope.names.length)];
                }
                return 'No names available';
            };
        }
    };
}]);

// Controller for /home
myAngularApp.controller('HomeController', ['$scope', function ($scope) {
    $scope.title = "Welcome to the Home Page!";
}]);

// Controller for /contact
myAngularApp.controller('ContactController', ['$scope', '$location', function ($scope, $location) {
    $scope.sendMessage = function () {
        $location.path('/contact-success');
    };
    
    $scope.contact = {
        name: '',
        email: '',
        message: ''
    };
}]);

// Controller for /directory
myAngularApp.controller('DirectoryController', ['$scope', '$http', function ($scope, $http) {
    console.log("DirectoryController is working");

    // Fetch data from JSON file
    $http.get('data/names.json')
        .then(function (response) {
            $scope.names = response.data;
        }, function (error) {
            console.error('Error fetching data:', error);
        });

    // Default order
    $scope.order = 'name';

    // Add a new name
    $scope.addName = function () {
        $scope.names.push({
            name: $scope.newname.name,
            age: $scope.newname.age,
            belt: $scope.newname.belt,
            rate: parseInt($scope.newname.rate),
            available: true
        });

        // Clear form fields
        $scope.newname = {};
    };

    // Remove a specific name
    $scope.removeName = function (name) {
        var index = $scope.names.indexOf(name);
        if (index !== -1) {
            $scope.names.splice(index, 1);
        }
    };

    // Remove all names
    $scope.removeAll = function () {
        $scope.names = [];
    };
}]);



// ***********************************************
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
