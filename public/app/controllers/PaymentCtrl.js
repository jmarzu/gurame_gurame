app.controller('PaymentCtrl', ['$scope', function($scope) {
  console.log('in the payment ctrl');

  $scope.purchases = $rootScope.purchases;



}]);