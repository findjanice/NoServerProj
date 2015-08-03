app.controller('memrzCtrl', function($scope, verseService, $routeParams) {

  $scope.memorized = function() {
    $scope.memorizedArr = verseService.memorized();
  }
  $scope.memorized();

  $scope.postToMemorize = function(index) {
    verseService.postToMemorize(index);
  };

  $scope.totalMemorized = function() {
      $scope.memorizedArr.length;
      verseService.totalMemorized();

    }
    //end controller
})
