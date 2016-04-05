angular.module('bookStore')
  .factory('Books', function(FirebaseUrl, $firebaseArray, $firebaseObject, $state) {

    var booksRef = new Firebase(FirebaseUrl + '/books');
    var books = $firebaseArray(booksRef);

    var Books = {
      addBook: function(book) {
        if (book) {
          return books.$add(book).then(function(data){
            $state.go('books');
          });
        }
      },

      all: books
    }

    return Books;
  });
