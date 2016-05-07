angular.module('bookStore')
  .factory('Orders', function($firebaseArray, FirebaseUrl, Cart, moment, Users, Auth) {
    var ordersRef = new Firebase(FirebaseUrl + '/orders');
    var orders = $firebaseArray(ordersRef);

    var Orders = {
      saveOrder: function(order) {
        moment.locale('uk');
        Orders.saveOrderInfo(order);
        return orders.$add(order).then(function(ref){
          console.log('Saved order ' + ref);
        }, function(error){
          console.log(error);
        })
      },
      getOrder: function(order) {
        return orders.$getRecord(order.id);
      },
      getOrders: function(){
        return orders;
      },

      saveOrderInfo: function(order){
        order.date = moment().format('LLLL');
        order.books = Cart.items;
        order.price = Cart.getSummaryPrice();
        order.customer.uid = Cart.getUserId();
      }
    };

    return Orders;
  });
