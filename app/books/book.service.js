angular.module('bookStore')
  .factory('Books', function(FirebaseUrl, $firebaseArray, $firebaseObject, $state, $stateParams) {

    var booksRef = new Firebase(FirebaseUrl + '/books');
    var books = $firebaseArray(booksRef);

    var Books = {
      addBook: function(book) {
        if (book) {
          return books.$add(book).then(function(data) {
            $state.go('books');
          });
        }
      },

      editBook: function(book) {
        if (book) {
          $state.go('books_edit',{bookId: book.$id, data: book});
        }
      },

      submitBook: function(book) {
        if (book) {
          return books.$save(book).then(function(data) {
            $state.go('books');
          });
        }
      },
      all: books
    }

    return Books;
  });
