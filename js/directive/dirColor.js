app.directive('dirColor', function() {
  return {
    restrict: "E",
    transclude: true,
    template: '<div class = "col-md-12" style="border: 1px dashed #C4C4C4; border-radius: 10px; margin: 10px; padding: 10px"><ng-transclude></ng-transclude> </div>
  }
  //end of directive
})
