angular.module('bookStore')
  .factory('Cart', function(FirebaseUrl, $firebaseArray, $firebaseObject, $state, Auth) {

    var cartsRef = new Firebase(FirebaseUrl + '/carts');
    var userId, cartRef, cartItems;

    Auth.$onAuth(function(authData) {
      userId = authData && authData.uid;
      cartRef = new Firebase(cartsRef + '/' + userId);
      cartItems = $firebaseArray(cartRef);
    });

    var Cart = {
      items: cartItems,
      cartRef: cartRef,

      addItem: function(item) {
        var itemInCart = cartItems.$getRecord(item.$id);
        if (itemInCart) {
          itemInCart.quantity++;
          console.log('Quantity of ' + itemInCart.name + ' now = ' + itemInCart.quantity);
          return cartItems.$save(itemInCart);
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

      removeItem: function(item) {
        var itemInCart = cartItems.$getRecord(item.$id);
        if (itemInCart) {
          if (itemInCart.quantity === 1) {
            console.log('Removing ' + itemInCart.name);
            return cartItems.$remove(itemInCart);
          } else {
            itemInCart.quantity--;
            console.log('Quantity of ' + itemInCart.name + ' now = ' + itemInCart.quantity);
            return cartItems.$save(itemInCart);
          }
        }
      },

      getItem: function(id) {
        if (id) {
          return cartItems.$getRecord(id);
        } else {
          return false;
        }

      },

      viewItems: function() {
        console.log(cartItems);
      }
    };

    return Cart;
  });
