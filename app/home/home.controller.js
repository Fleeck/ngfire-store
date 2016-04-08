angular.module('bookStore')
  .controller('HomeCtrl', function($state, Auth, Users, Books) {
    var homeCtrl = this;
    homeCtrl.tab = 1;
    homeCtrl.logout = Auth.logout;
    homeCtrl.isLoggedIn = Auth.isLoggedIn;
    homeCtrl.currentUser = Auth.currentUser;
    homeCtrl.getUserName = Users.getUserName;
    homeCtrl.books = Books.all;

    Auth.$onAuth(function(authData) {
      if (authData) {
        homeCtrl.currentUser = authData;
      }
    });

    homeCtrl.selectTab = function(setTab, state, callback) {
      homeCtrl.tab = setTab;
      $state.go(state).then(callback),
        function(error) {
          console.log(error);
        };

    };

    homeCtrl.isSelected = function(checkTab) {
      return homeCtrl.tab === checkTab;
    };
  });
