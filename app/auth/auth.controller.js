angular.module('bookStore')
  .controller('AuthCtrl', function(Auth, $state) {
    var authCtrl = this;

    authCtrl.user = {
      email: '',
      password: ''
    };

    authCtrl.login = function() {
      Auth.$authWithPassword(authCtrl.user).then(function(auth) {
        $state.go('home');
        console.log('Logged in');
      }, function(error) {
        authCtrl.error = error;
      });
    };
    
    authCtrl.register = function() {
      Auth.$createUser(authCtrl.user).then(function(user) {
        authCtrl.login();
        console.log('Registered');
      }, function(error) {
        authCtrl.error = error;
      });
    };
  });
