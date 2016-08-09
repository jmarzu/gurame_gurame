app.controller('MainCtrl', ['$scope', function($scope) {
  console.log('in main controller');

  $scope.showMessage = function() {
    console.log('button clicked');
  }

}]);