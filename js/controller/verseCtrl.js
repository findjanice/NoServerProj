app.controller('verseCtrl', function($scope, verseService, $routeParams) {

  $scope.verseGet = function() {
    $scope.verses = verseService.verseGet();
    console.log($scope.verses);
  };
  $scope.verseGet();

  //end of verseGet

  $scope.addToMemArr = function(data) {
    console.log(data);
    verseService.addToMemArr(data);
  }

  $scope.typeToMemArr = function(data) {
    verseService.typeToMemArr(data);
    $scope.typeVerse = '';
  }


  $scope.memorizeArr = function() {
    $scope.toMemorizeArr = verseService.memorizeArr();
  };
  $scope.memorizeArr();

  $scope.totalToMemorize = function() {
    verseService.totalToMemorize();
  }

  $scope.toDeleteMem = function(index) {
    verseService.toDeleteMem();
  }

  // $scope.addToMemArr = function() {
  //   $scope.toMemorizeArr.push({
  //     theVerse: $scope.verseGet
  //   });
  //   $scope.verseGet = {
  //     verseid: 'not in list',
  //     reference: ''
  //   };
  //   console.log($scope.toMemorizeArr);
  // };
  // $scope.typeToMemArr = function() {
  //   $scope.toMemorizeArr.push({
  //     theTypeVerse: $scope.typeVerse
  //   })
  //   $scope.typeVerse = '';
  // }
  // $scope.totalToMemorize = function() {
  //   return $scope.toMemorizeArr.length;
  // }
  //
  // $scope.toDeleteMem = function() {
  //   console.log(index);
  //   $scope.toMemorizeArr.splice(index, 1);
  // }



  // end controller
});
