angular.module('bookStore')
  .factory('Cart', function(FirebaseUrl, $firebaseArray, $firebaseObject, $state, Auth) {

    var cartsRef = new Firebase(FirebaseUrl + '/carts');
    var userId, cartRef;

    Auth.$onAuth(function(authData) {
      userId = authData && authData.uid;
      cartRef = new Firebase(cartsRef + '/' + userId);
      Cart.items = $firebaseArray(cartRef);
    });

    var Cart = {

      items: [],

      addItem: function(item) {
        var itemInCart = Cart.items.$getRecord(item.$id);
        if (itemInCart) {
          itemInCart.quantity++;
          console.log('Quantity of ' + itemInCart.name + ' now = ' + itemInCart.quantity);
          return Cart.items.$save(itemInCart);
        } else {
          console.log('Adding item ' + item.name + '  to:  ' + cartRef);
          return cartRef.child(item.$id).set({
            author: item.author,
            coverUrl: item.coverUrl,
            name: item.name,
            pagesCount: item.pagesCount,
            price: item.price,
            pubdate: item.pubdate,
            quantity: item.quantity
          });
        }
      },

      removeItem: function(item, removeCompletely) {
        var itemInCart = Cart.items.$getRecord(item.$id);
        if (removeCompletely) {
          return Cart.items.$remove(itemInCart);
        }
        if (itemInCart) {
          if (itemInCart.quantity === 1) {
            console.log('Removing ' + itemInCart.name);
            return Cart.items.$remove(itemInCart);
          } else {
            itemInCart.quantity--;
            console.log('Quantity of ' + itemInCart.name + ' now = ' + itemInCart.quantity);
            return Cart.items.$save(itemInCart);
          }
        }
      },

      getItem: function(id) {
        if (id) {
          return Cart.items.$getRecord(id);
        } else {
          return false;
        }

      },

      getItemsLength: function() {
        return Cart.items && Cart.items.length;
      }
    };

    return Cart;
  });
