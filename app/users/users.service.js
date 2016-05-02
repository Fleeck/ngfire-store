angular.module('bookStore')
  .factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl) {

    var usersRef = new Firebase(FirebaseUrl + '/users');
    var users = $firebaseArray(usersRef);

    var Users = {
      saveUser: function(user) {
        return usersRef.child(user.uid).set(user);
      },
      getUser: function(uid) {
        return users.$getRecord(uid);
      },
      updateUser: function(user){
        return usersRef.child(user.uid).update(user);
      },

      all: users
    };

    return Users;
  });
