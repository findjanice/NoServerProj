var app = angular.module('memoryApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/template/home.html',
      controller: 'verseCtrl'
    })
    .when('memorize', {
      templateUrl: 'js/template/memorize.html',
      controller: 'memorizeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

  //end of config
});
