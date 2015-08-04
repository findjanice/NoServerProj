app.controller('verseCtrl', function($scope, verseService, $routeParams) {

  $scope.verseGet = function() {
    $scope.verses = verseService.verseGet();
  };
  $scope.verseGet();

  $scope.addToMemArr = function(data) {
    verseService.addToMemArr(data);
  };

  $scope.typeToMemArr = function(data) {
    verseService.typeToMemArr(data);
    $scope.typeVerse = '';
  };

  $scope.memorizeArr = function() {
    $scope.toMemorizeArr = verseService.memorizeArr();
  };
  $scope.memorizeArr();

  $scope.totalToMemorize = function() {
    return $scope.toMemorizeArr.length;
    $scope.toMemorizeArr = verseService.totalToMemorize();
  };


  $scope.toDeleteMem = function(index) {
    verseService.toDeleteMem(index);
  };

  $scope.checkMemorized = function(data, index) {
    verseService.checkMemorized(data, index);
  }

  // $scope.postToMemorize = function(index) {
  //   verseService.postToMemorize(index);
  // };
  // end controller
});
