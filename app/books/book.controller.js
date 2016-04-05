angular.module('bookStore')
  .controller('bookCtrl', function(Books) {
    var bookCtrl = this;

    bookCtrl.addBook = Books.addBook;
    bookCtrl.book = {
      name: '',
      author: '',
      price: 0,
      pubdate: '',
      coverUrl: '',
      pagesCount: 0
    };


  });
