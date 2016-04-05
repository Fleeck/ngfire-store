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
        controller: 'HomeCtrl as homeCtrl',
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
      .state('admin', {
        url: '/admin',
        templateUrl: 'books/admin.html',
        controller: 'bookCtrl as bookCtrl'
      })

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://ukr-book.firebaseio.com');
