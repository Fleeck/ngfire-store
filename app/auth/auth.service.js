angular.module('bookStore')
  .factory('Auth', function($firebaseAuth, FirebaseUrl, $state) {
    var ref = new Firebase(FirebaseUrl);
    var Auth = $firebaseAuth(ref);

    Auth.currentUser = Auth.$getAuth();

    Auth.isLoggedIn = function() {
      var authData = ref.getAuth();
      if (authData) {
        return true;
      } else {
        return false;
      }
    };

    ref.onAuth(Auth.isLoggedIn);

    Auth.logout = function() {
      ref.unauth().then(function() {
        console.log('Logged out');
        $state.go('home');
      }, function(error) {
        authCtrl.error = error;
      });
    };
    return Auth;
  });
