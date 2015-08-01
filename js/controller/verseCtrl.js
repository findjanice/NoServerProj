app.controller('verseCtrl', function($scope, verseService, $routeParams) {

  $scope.verseGet = function() {
    $scope.verses = verseService.verseGet();
    console.log($scope.verses);
  };
  $scope.verseGet();

  // end controller
});
