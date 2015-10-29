app.controller('verseCtrl', function($scope, verseService, $routeParams, $modal,
  $log, $firebaseArray, memRef) {

  //adding Firebase
  var ref = new Firebase("https://firstapp-janice.firebaseio.com");

  var verses = $firebaseArray(ref);

  verses.$loaded().then(function(verses) {
    console.log(verses);
  })

  $scope.typeToMemArr = function(verse) {
      verses.$add({
        theTypeVerse: verse
      });
      $scope.typeVerse = '';
    }
    //end firebase

  $scope.editorEnabled = false;

  // $scope.verseGet = function() {
  //   $scope.verses = verseService.verseGet();
  // };
  // $scope.verseGet();

  // $scope.addToMemArr = function() {
  //   console.log($scope.typeVerse);
  //   verseService.addToMemArr($scope.typeVerse);
  // };

  // $scope.typeToMemArr = function(data) {
  //   verseService.typeToMemArr(data);
  //   $scope.typeVerse = '';
  // };

  $scope.memorizeArr = function() {
    $scope.toMemorizeArr = verseService.memorizeArr();
    console.log('this is memorizeArr', $scope.toMemorizeArr);
  };
  $scope.memorizeArr();

  $scope.totalToMemorize = function() {
    return $scope.toMemorizeArr.length;
    $scope.toMemorizeArr = verseService.totalToMemorize();
  };


  $scope.toDeleteMem = function(index) {
    verseService.toDeleteMem(index);
  };

  //testing Modal

  $scope.animationsEnabled = true;

  // var currentIndex;

  $scope.open = function(size, index, myVerse) {
    console.log(index);

    var vm = this;
    vm.currentIndex = index;
    vm.myVerse = myVerse;
    console.log('this is myVerse', vm.myVerse);
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'js/template/memcheck.html',
      controller: 'memCheckCtrl',
      controllerAs: 'vm',
      size: size,
      resolve: {
        index: function() {
          return vm.currentIndex;
        },
        verse: function() {
          return vm.myVerse;
        },
      }
    });

    modalInstance.result.then(function(verse) {
        $log.info('Modal done at: ' + new Date());
      },
      function() {
        $log.info('Modal dismissed at: ' + new Date());
      });

  };

  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  // end controller
});
