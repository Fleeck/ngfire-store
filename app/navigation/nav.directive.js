angular.module('bookStore')
  .directive('navigation', function() {
    return {
      restrict: 'E',
      templateUrl: 'navigation/nav.html'
    };
  });
