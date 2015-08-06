app.controller('dashboardCtrl', function($scope, verseService, dashboardService,
  $routeParams) {

  $scope.totalToMemorize = verseService.totalToMemorize();

  $scope.totalMemorized = verseService.totalMemorized();

  $scope.typeToMemArr = function(data) {
    verseService.typeToMemArr(data);
    $scope.typeVerse = '';
  };

  $scope.memoryTips = function() {
    $scope.memoryTip = dashboardService.memoryTips();
    console.log($scope.memoryTip);
  }
  $scope.memoryTips();

  $scope.getQod = function() {
    $scope.inspiration = dashboardService.getQod()
      .then(function(data) {
        $scope.quote = data.quote;
        $scope.author = data.author;
        console.log('this is memory', $scope.author);
      });
  };


  $scope.getQod();

  //end of controller
});
