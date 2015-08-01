var app = angular.module('memoryApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/template/home.html',
      controller: 'verseCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

  //end of config
});
