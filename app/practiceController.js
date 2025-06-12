/**
myApp: The name of your AngularJS app.

[]: This array is for dependencies (e.g., other modules). Empty here.

This line tells AngularJS:
👉 "Hey! I'm creating an app module called myApp."
 */

// Create the app module
// var app = angular.module('myPracticeApp', []);

// Create the controller
// ✅ 2. Create a Controller Inside the Module
// app.controller('MyController', [$scope, function($scope) {
  // Your variables and functions here
//     $scope.message = "Welcome to My Practice App!";
// }]);

/**
MyController': The name of your controller.
$scope: Object to connect data/logic to the HTML.
Inside, you attach variables and functions to $scope.
 */

// ✅ 3. Use It in Your HTML
/**
<body ng-app="myApp" ng-controller="MyController">
    <p>{{ message }}</p>
</body>

ng-app="myApp": This bootstraps (starts) the AngularJS app.
ng-controller="MyController": Tells Angular to use your controller.
 */

// Full Working Example

// index.html

// <!DOCTYPE html>
// <html>
// <head>
//     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
//     <script src="app.js"></script>
// </head>
// <body ng-app="myApp" ng-controller="MyController">
//     <h1>{{ message }}</h1>
// </body>
// </html>

// app.js

// // Create the app module
// var app = angular.module('myApp', []);

// // Create the controller
// app.controller('MyController', ['$scope', function($scope) {
//     $scope.message = "Hello from AngularJS Controller!";
// }]);

// 📘 Summary
// Step   : 	What You Do
// Module   : 	Define your app container using angular.module()
// Controller   : 	Write app logic using app.controller()
// View   : 	Connect logic to HTML using ng-app and ng-controller
// Scope   : 	Use $scope to bind variables/functions between controller and view

//Creating a module and controller in AngularJS

angular.module('myPracticeApp', [])
    .controller('MyController', ['$scope', function($scope) {

        //Reverse Name
        $scope.reverseName = function() {
            if($scope.nameInput) {
                $scope.reversedName = $scope.nameInput.split('').reverse().join('');
            } else {
                $scope.reversedName = '';
            }
        };

        //List Items
        $scope.items = ['apple', 'banana', 'cherry'];

        //Calculator
        $scope.addNumbers = function() {
            $scope.result = Number($scope.num1) + Number($scope.num2);
        };

        $scope.subtractNumbers = function() {
            $scope.result = Number($scope.num1) - Number($scope.num2);
        };

        $scope.multiplyNumbers = function() {
            $scope.result = Number($scope.num1) * Number($scope.num2);
        };

        $scope.divideNumbers = function() {
            if(Number($scope.num2) !== 0) {
                $scope.result = Number($scope.num1) / Number($scope.num2);
            } else {
                $scope.result = 'Cannot divide by zero!';
            }
        };
        
        //Toggle Message
        $scope.message = "Hello, AngularJS!";
        $scope.showMessage = false;
        $scope.hideMessage = false;

        $scope.toggleMessage = function() {
            $scope.showMessage = !$scope.showMessage;
            $scope.hideMessage = !$scope.hideMessage;
        }
    }]);