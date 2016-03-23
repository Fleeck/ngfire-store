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
          auth: function($state, Users, Auth) {
            return Auth.$requireAuth().catch(function() {
              $state.go('home');
            });
          },
          profile: function(Users, Auth) {
            return Auth.$requireAuth().then(function(auth) {
              return Users.getProfile(auth.uid).$loaded();
            });
          }
        }
      })

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://ukr-book.firebaseio.com');
