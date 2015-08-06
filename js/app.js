var app = angular.module('memoryApp', ['ngRoute', 'ui.bootstrap', "firebase"]);
app.constant('fb', {
  url: 'https://firstapp-janice.firebaseio.com'
});


app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'js/template/home.html',
      controller: 'verseCtrl',
      resolve: {
        memRef: function(verseService) {
          return verseService.refGetVerses();
        }
      }
    })
    .when('/dashboard', {
      templateUrl: 'js/template/dashboard.html',
      controller: 'dashboardCtrl'
    })
    .when('/memorized', {
      templateUrl: 'js/template/memorize.html',
      controller: 'memrzCtrl',
      resolve: {
        memRef: function(verseService) {
          return verseService.refgetMemorize();
        }
      }
    })
    .otherwise({
      redirectTo: '/home'
    })

  //end of config
});
