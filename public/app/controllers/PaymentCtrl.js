app.controller('PaymentCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  console.log('in the payment ctrl');

  $scope.purchases = $rootScope.purchases;

  


}]);