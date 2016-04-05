angular.module('bookStore')
  .controller('BookCtrl', function(Books, $state) {
    var bookCtrl = this;

    bookCtrl.addBook = Books.addBook;
    bookCtrl.getAllBooks = Books.getAllBooks;
    bookCtrl.books = Books.all;

    bookCtrl.createBook = function(){
      return $state.go('books_new');
    }
    
    bookCtrl.book = {
      name: '',
      author: '',
      price: 0,
      pubdate: '',
      coverUrl: '',
      pagesCount: 0
    };


  });
