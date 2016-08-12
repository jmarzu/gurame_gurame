app.controller('ArtCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('art controller');
  
  $scope.arts = [];

  $http({
      method: 'GET',
      url: '/api/products'
    }).then(function(data, err){
      console.log('art ', data);
      $scope.arts = data.data;
    });

}]);