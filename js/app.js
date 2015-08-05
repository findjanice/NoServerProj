var app = angular.module('memoryApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'js/template/home.html',
      controller: 'verseCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'js/template/dashboard.html',
      controller: 'dashboardCtrl'
    })
    .when('/:memorized', {
      templateUrl: 'js/template/memorize.html',
      controller: 'memrzCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    })

  //end of config
});
