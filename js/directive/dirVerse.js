app.directive('verseList', function() {
  return {
    restrict: "E",
    transclude: true,
    template: '<div class = "col-md-4"><ng-transclude></ng-transclude> </div> '
  }
  //end of directive
})
