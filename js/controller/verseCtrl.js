app.controller('verseCtrl', function($scope, verseService, $routeParams) {

  $scope.verseGet = function() {
    $scope.verses = verseService.verseGet();
    console.log($scope.verses);
  };
  $scope.verseGet();

  //end of verseGet
  $scope.toMemorizeArr = [];
  $scope.addToMemArr = function() {
    $scope.toMemorizeArr.push({
      theVerse: $scope.verseGet
    });
    $scope.verseGet = {
      verseid: 'not in list',
      reference: ''
    };
    console.log($scope.toMemorizeArr);

  };



  // end controller
});
