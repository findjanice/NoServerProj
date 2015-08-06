app.controller('dashboardCtrl', function($scope, verseService, $routeParams) {

  $scope.totalToMemorize = verseService.totalToMemorize();

  $scope.totalMemorized = verseService.totalMemorized();


});
