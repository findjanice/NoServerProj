app.controller('dashboardCtrl', function($scope, verseService, $routeParams) {

  $scope.totalToMemorize = function() {
    return $scope.toMemorizeArr.length;
    $scope.toMemorizeArr = verseService.totalToMemorize();
  };

  $scope.totalMemorized = function() {
    return $scope.memorizedArr.length;
    verseService.totalMemorized();
  }

})
