let myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', function($scope) {
  $scope.message = "This is the message from $scope";
  $scope.options = ['pork', 'chicken', 'beef', 'lamb'];
}]);
