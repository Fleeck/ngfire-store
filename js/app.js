var app = angular.module("bookStore", [])
.controller('MainCtrl', [
  '$scope',
  function($scope){

  }
]);

app.directive('aboutUs', function() {
  return {
    restrict:"E",
    templateUrl:'about.html'
  };
});

app.directive('contacts', function() {
  return {
    restrict:'E',
    templateUrl:'contacts.html'
  };
});

app.directive('mainPage', function() {
  return {
    restrict:'E',
    templateUrl:'main.html'
  };
});
