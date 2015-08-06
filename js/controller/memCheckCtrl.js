app.controller('memCheckCtrl', function($scope, $modalInstance, index, verse,
  verseService) {

  var vm = this;
  vm.index = index;
  vm.verse = verse;

  $scope.ok = function(verse, index) {
    console.log('this is in the controller', vm.verse, vm.index);
    console.log('this is the scope', $scope.typeMemVerse);
    if ($scope.typeMemVerse === vm.verse) {
      verseService.ok(verse, vm.index);
      $modalInstance.close($scope.typeMemVerse);
    } else if ($scope.typeMemVerse !== vm.verse) {
      alert('wrong');
    }
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});
