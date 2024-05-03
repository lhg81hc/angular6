let myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/app/views/home.html',
      controller: 'IndexController'
    })
    .when('/characters', {
      templateUrl: '/app/views/characters.html',
      controller: 'IndexController'
    }).otherwise({
      redirectTo: '/home'
    })
}])

myApp.directive('randomCharacter', [function() {
  return {
    restrict: 'E',
    scope: {
      characters: '=',
      title: '=',
    },
    transclude: true,
    replace: true,
    templateUrl: '/app/templates/random_character.html',
    controller: function($scope) {
      $scope.random = Math.floor(Math.random() * 20)
    }
  };
}]);

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
