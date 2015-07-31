var app = angular.module('memoryApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/home.html',
      controller: 'verseCtrl'
    })
    .when('/memorized' {
      templateUrl: 'js/memorized.html',
      controller: 'memorizeCtrl'
    })
    .otherwise('/')
})
