'use strict';

angular
  .module('bookStore', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'BookCtrl as bookCtrl',
        templateUrl: 'home/home.html',
      })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html'
      })
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/register.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.html'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'users/profile.html',
        controller: 'ProfileCtrl as profileCtrl',
        resolve: {
          profile: function(Users, Auth) {
            return Auth.$requireAuth().then(function() {
              return Users.getProfile(Auth.currentUser.uid).$loaded();
            });
          }
        }
      })
      .state('books_new', {
        url: '/books/new',
        templateUrl: 'books/book_new.html',
        controller: 'BookCtrl as bookCtrl'
      })
      .state('books_edit', {
        url: '/books/:bookId' ,
        templateUrl: 'books/book_edit.html',
        controller: 'BookCtrl as bookCtrl',
        params: {
          data: null
        }
      })
      .state('books', {
        url: '/books',
        templateUrl: 'books/books.html',
        controller: 'BookCtrl as bookCtrl'
      })
      .state('cart', {
        url: '/:userId/cart',
        templateUrl: 'cart/cart.html',
        controller: 'CartCtrl as cartCtrl'
      })

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://ukr-book.firebaseio.com');
