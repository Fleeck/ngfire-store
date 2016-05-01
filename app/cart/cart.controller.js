angular.module('bookStore')
  .controller('CartCtrl', function(Cart, Auth) {
    var cartCtrl = this;
    cartCtrl.Cart = Cart;
    cartCtrl.currentUser = Auth.currentUser;
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

    cartCtrl.getSummaryPrice = function() {
      var sum = 0;
      cartCtrl.Cart.items.forEach(function(item){
        sum += item.quantity * item.price;
      });
      return sum;
    };

    cartCtrl.getSummaryQuantity = function() {
      var quantity = 0;
      cartCtrl.Cart.items.forEach(function(item){
        quantity += item.quantity;
      });
      return quantity;
    }
  });
