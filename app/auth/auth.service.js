angular.module('bookStore')
  .factory('Auth', function($firebaseAuth, FirebaseUrl, $state) {
    var ref = new Firebase(FirebaseUrl);
    var Auth = $firebaseAuth(ref);

    Auth.currentUser = Auth.$getAuth();
    Auth.$onAuth(function(authData) {
      if (authData && authData.provider == 'anonymous') {

      }
    });

    Auth.$authAnonymously().then(function(authData) {
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });


    Auth.isLoggedIn = function() {
      var authData = ref.getAuth();
      if (authData && authData.provider !== 'anonymous') {
        return true;
      } else {
        return false;
      }
    };

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
