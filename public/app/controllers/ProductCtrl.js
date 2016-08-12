app.controller('ProductCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('products ctrl');

  $scope.products = [];
  
    $http({
      method: 'GET',
      url: '/api/products'
    }).then(function(data, err){
      console.log('data: ', data.data);
    
      console.log('Error: ', err);
    })
  


  $scope.deleteProducts = function(id, productsIdx) {
    Cart.delete({ id: id }, function success(data) {
      $scope.products.splice(productsIdx, 1);
    }, function error(data) {
      console.log(data);
    });
  };

}]);