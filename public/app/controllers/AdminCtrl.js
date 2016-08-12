app.controller('AdminCtrl', ['$scope', '$http', '$location', '$httpParamSerializerJQLike', function($scope, $http, $location, $httpParamSerializerJQLike) {
  console.log('the Admin controller');

   $scope.user = {
    password: ''
  };
  $scope.userLogin = function() {

    $http({
      method: 'POST',
      url: '/users',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: $httpParamSerializerJQLike({ password: $scope.user.password })
    }).then(function(bool, err){
      console.log('bool: ', bool);
      console.log('bool: ', bool.status);
      if(bool.data === true) {
        $location.path('/addInventory');
      }

      console.log('Error: ', err);
    })
  }

}]);


