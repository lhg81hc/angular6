let myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', function($scope) {
  $scope.message = "This is the message from $scope";
  $scope.options = [
    {
      first_name: 'Thad',
      last_name: 'Le',
      age: 33
    },
    {
      first_name: 'Jason',
      last_name: 'Bourne',
      age: 35,
    },
    {
      first_name: 'David',
      last_name: 'Webb',
      age: null,
    }
  ];
}]);
