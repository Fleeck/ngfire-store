var app = angular.module("myApp", []);

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
