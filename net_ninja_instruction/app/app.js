let myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/app/views/home.html'
    })
    .when('/characters', {
      templateUrl: '/app/views/characters.html',
      controller: 'IndexController'
    }).otherwise({
      redirectTo: '/home'
    })
}])

myApp.controller('IndexController', ['$scope', function($scope) {
  $scope.message = "This is the message from $scope";
  $scope.characters = [
    {
      id: 1,
      first_name: 'Thad',
      last_name: 'Le',
      age: 33,
      available: true,
      gender: 'm',
    },
    {
      id: 2,
      first_name: 'Jason',
      last_name: 'Bourne',
      age: 30,
      available: true,
      gender: 'm',
    },
    {
      id: 3,
      first_name: 'Ethan',
      last_name: 'Hunt',
      age: 32,
      available: false,
      gender: 'm',
    },
    {
      id: 50,
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

  $scope.addCharacter = function() {
    $scope.characters.push({
      first_name: $scope.newCharacter.first_name,
      last_name: $scope.newCharacter.last_name,
      age: parseInt($scope.newCharacter.age),
      gender: $scope.newCharacter.gender,
      available: $scope.newCharacter.available === 'true',
    });

    // $scope.newCharacter = {};
  };
}]);
