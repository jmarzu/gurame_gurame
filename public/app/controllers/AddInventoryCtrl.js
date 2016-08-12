app.controller('AddInventoryCtrl', ['$scope', '$http', '$httpParamSerializerJQLike', function($scope, $http, $httpParamSerializerJQLike) {
  console.log('inventory ctrl');

  $scope.artValues = ['true', 'false'];
  $scope.productValues = ['true', 'false'];

  $scope.product = {
    title: '',
    price: '',
    image: '',
    description: '',
    art: '',
    product: ''
  };

  $scope.addInventory = function() {

    $http({
      method: 'POST',
      url: '/api/inventory',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: $httpParamSerializerJQLike({ 
        title: $scope.product.title,
        price: $scope.product.price,
        image: $scope.product.image,
        description: $scope.product.description,
        art: $scope.product.art,
        product: $scope.product.product
      })
    }).then(function(success, error) {
      console.log('success ', success);
      console.log('error ', error);
    });
  };

}]);