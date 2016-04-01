angular.module('bookStore')
  .factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl) {

    var usersRef = new Firebase(FirebaseUrl + '/users');
    var users = $firebaseArray(usersRef);

    var Users = {
      saveUser: function(user) {
        return usersRef.child(user.uid).set(user);
      },
      getUser: function(uid) {
        return $firebaseObject(usersRef.child(uid));
      },
      getUserName: function(uid) {
        if (users.$getRecord(uid)) {
          return users.$getRecord(uid).name;
        }
      },
      all: users
    };

    return Users;
  });
