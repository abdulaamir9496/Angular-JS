var myAngularApp = angular.module('myAngularApp', []);

myAngularApp.config(function() {
    // configure the app here
    console.log("Angular app is configured");
});

myAngularApp.run(function() {
    // run the app here
    console.log("Angular app is running");
});

myAngularApp.controller('MainController', function($scope) {
    $scope.message = "Hello, AngularJS!";
    
    $scope.changeMessage = function() {
        $scope.message = "You clicked the button!";
    };
    $scope.resetMessage = function() {
        $scope.message = "Hello, AngularJS!";
    };

    console.log("MainController initialized");
    // Initialize the message   
    $scope.resetMessage();
    
});

