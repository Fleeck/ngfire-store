angular.module('bookStore')
  .controller('ProfileCtrl', function($state, md5, Auth, profile){
    var profileCtrl = this;

    profileCtrl.profile = profile;
    profileCtrl.updateProfile = function(){
      profileCtrl.profile.emailHash = md5.createHash(Auth.currentUser.password.email);
      profileCtrl.profile.$save();
    };

  });
