angular.module('bookStore')
  .controller('NavCtrl', function($state, Auth, Users) {
    var navCtrl = this;

    navCtrl.logout = Auth.logout;
    navCtrl.isLoggedIn = Auth.isLoggedIn;
    navCtrl.currentUser = Auth.currentUser;

    Auth.$onAuth(function(authData) {
      if (authData) {
        navCtrl.currentUser = authData;
      }
    });

    navCtrl.selectTab = function(setTab, state, callback) {
      navCtrl.tab = setTab;
      $state.go(state).then(callback),
        function(error) {
          console.log(error);
        };
    };

    navCtrl.isSelected = function(checkTab) {
      return navCtrl.tab === checkTab;
    };
  });
