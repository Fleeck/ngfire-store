angular.module('bookStore')
  .controller('BookCtrl', function(Books, $state, Cart) {
    var bookCtrl = this;

    bookCtrl.addBook = Books.addBook;
    bookCtrl.getAllBooks = Books.getAllBooks;
    bookCtrl.books = Books.all;
    bookCtrl.editBook = Books.editBook;
    bookCtrl.submitBook = Books.submitBook;
    bookCtrl.currentBook = $state.params.data;
    bookCtrl.deleteBook = Books.deleteBook;
    bookCtrl.Cart = Cart;

    bookCtrl.createBook = function(){
      return $state.go('books_new');
    }

    bookCtrl.goBack = function(){
      return $state.go('books');
    }

    bookCtrl.book = {
      name: '',
      author: '',
      price: 0,
      pubdate: '',
      coverUrl: '',
      pagesCount: 0,
      quantity: 1
    };


  });
