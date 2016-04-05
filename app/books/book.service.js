angular.module('bookStore')
  .factory('Books', function(FirebaseUrl, $firebaseArray) {

    var booksRef = new Firebase(FirebaseUrl + '/books');
    var books = $firebaseArray(booksRef);

    var Books = {
      addBook: function(book) {
        if (book) {
          debugger;
          return booksRef.child(book.name).set(book);
          console.log('Added');
        }
      }
    };

    return Books;
  });
