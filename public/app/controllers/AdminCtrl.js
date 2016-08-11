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
    }).then(function(success, err){
      console.log('Success: ', success);
      console.log('Error: ', err);
    })

    // $http.post('/users', $httpParamSerializerJQLike($scope.user)).then(function success(res) {
    //   $location.path('/#/products');
    //   console.log('Success: ', res);
    // }, function error(res) {
    //   console.log('Error: ', res);
    // });
  }

}]);


