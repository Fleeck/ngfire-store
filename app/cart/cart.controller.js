angular.module('bookStore')
  .controller('CartCtrl', function(Cart, Auth, Orders, Users) {
    var cartCtrl = this;
    cartCtrl.Cart = Cart;
    cartCtrl.currentUser = Users.getUser(Auth.currentUser.uid);
    cartCtrl.Orders = Orders;
    cartCtrl.getCorrectBookSign = function() {
      switch (cartCtrl.getSummaryQuantity()) {
        case 1:
          return 'книга';
        case 2:
        case 3:
        case 4:
          return 'книги';
        default:
          return'книг';
      }
    };

    cartCtrl.getSummaryQuantity = function() {
      var quantity = 0;
      cartCtrl.Cart.items.forEach(function(item){
        quantity += item.quantity;
      });
      return quantity;
    };

    cartCtrl.order = {
      done: false,
      books: {},
      date: '',
      price: 0,
      userId: ''
    }
  });
