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

myApp.controller('IndexController', ['$scope', '$http', function($scope, $http) {
  $http.get('/app/data/characters.json').then(function(res) {
    $scope.characters = res.data;
  })

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
  };
}]);
