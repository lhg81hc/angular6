let myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', function($scope) {
  $scope.message = "This is the message from $scope";
  $scope.characters = [
    {
      id: 233,
      first_name: 'Thad',
      last_name: 'Le',
      age: 33,
      available: true,
      gender: 'm',
    },
    {
      id: 644,
      first_name: 'Jason',
      last_name: 'Bourne',
      age: 30,
      available: true,
      gender: 'm',
    },
    {
      id: 113,
      first_name: 'Ethan',
      last_name: 'Hunt',
      age: 32,
      available: false,
      gender: 'm',
    },
    {
      id: 10,
      first_name: 'Evelyn',
      last_name: 'Salt',
      age: 25,
      available: true,
      gender: 'f',
    }
  ];

  $scope.removeCharacter = function(character) {
    let removedCharacter = $scope.characters.indexOf(character);
    $scope.characters.splice(removedCharacter, 1);
  };
}]);
