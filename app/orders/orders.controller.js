angular.module('bookStore')
  .controller('OrdersCtrl', function(Users, Cart, Auth, Orders) {
    var ordersCtrl = this;
    ordersCtrl.Cart = Cart;
    ordersCtrl.Orders = Orders;
  });
