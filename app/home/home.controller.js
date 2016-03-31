angular.module('bookStore')
  .controller('HomeCtrl', function($state, Auth) {
    var homeCtrl = this;
    homeCtrl.tab = 1;
    homeCtrl.logout = Auth.logout;

    homeCtrl.selectTab = function(setTab, state, callback) {
      homeCtrl.tab = setTab;
      $state.go(state).then(callback),
        function(error) {
          console.log(error);
        };

    };

    homeCtrl.products = [{
      name: 'Гаррі Поттер і в`язень Азкабану',
      author: 'Джоан Роулінг',
      price: 60,
      pubdate: '3 вересня 2004 р.',
      cover: 'images/harry3.jpg',
      quantity: 1

    }, {
      name: 'Гаррі Поттер і філософський камінь',
      author: 'Джоан Роулінг',
      price: 65,
      pubdate: '5 травня 2002 р.',
      cover: 'images/harry1.jpg',
      quantity: 1
    }, {
      name: 'Гаррі Поттер і таємна кімната',
      author: 'Джоан Роулінг',
      price: 59,
      pubdate: '16 серпня 2003 р.',
      cover: 'images/harry2.jpg',
      quantity: 1
    }, {
      name: 'Біблія',
      author: 'Редакція І.Огієнка',
      price: 50,
      pubdate: '11 квітня 1998 р.',
      cover: 'images/bible.jpg',
      quantity: 1
    }];
    // Функція додавання до кошика
    homeCtrl.added = function(index) {
      cartjs.cart.add(homeCtrl.products[index]);
    }

    homeCtrl.isSelected = function(checkTab) {
      return homeCtrl.tab === checkTab;
    };

  });
