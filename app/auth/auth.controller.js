angular.module('bookStore')
  .controller('AuthCtrl', function(Users, Auth, $state) {
    var authCtrl = this;

    authCtrl.user = {
      name: '',
      email: '',
      password: '',
      phone: '',
      city: ''
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
      Auth.$createUser(authCtrl.user).then(function() {
        Auth.$authWithPassword(authCtrl.user).then(function(authData) {
          Users.saveUser({
            uid: authData.uid,
            name: authCtrl.user.name,
            email: authCtrl.user.email,
            phone: authCtrl.user.phone,
            city: authCtrl.user.city
          });
          console.log('Registered');
          $state.go('home');
        });
      }, function(error) {
        authCtrl.error = error;
      });
    };
  });
