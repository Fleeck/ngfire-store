angular.module('bookStore')
  .factory('Auth', function($firebaseAuth, FirebaseUrl, $state) {
    var ref = new Firebase(FirebaseUrl);
    var Auth = $firebaseAuth(ref);

    Auth.isLoggedIn = function() {
      var authData = ref.getAuth();

      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
      } else {
        console.log("User is logged out");
      }
    };

    Auth.logout = function(){
      ref.unauth().then(function(){
        console.log('Logged out');
        $state.go('home');
      }, function(error){
        authCtrl.error = error;
      });
    };

    return Auth;
  });
