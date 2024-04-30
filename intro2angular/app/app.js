let myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', function($scope) {
  $scope.message = "This is the message from $scope";
  $scope.options = [
    {
      first_name: 'Thad',
      last_name: 'Le',
      age: 33,
      available: true,
      gender: 'Male',
      gender_abbreviation: 'M',
    },
    {
      first_name: 'Jason',
      last_name: 'Bourne',
      age: 30,
      available: true,
      gender: 'Male',
      gender_abbreviation: 'M',
    },
    {
      first_name: 'Ethan',
      last_name: 'Hunt',
      age: 32,
      available: false,
      gender: 'Male',
      gender_abbreviation: 'M',
    },
    {
      first_name: 'Evelyn',
      last_name: 'Salt',
      age: 25,
      available: true,
      gender: 'Female',
      gender_abbreviation: 'F'
    }
  ];
}]);
