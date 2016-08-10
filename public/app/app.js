var app = angular.module('Guram_Guram', ['ui.router', 'ui.materialize', 'ngLettering', 'ngAnimate']);
console.log('gurame gurame');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'public/views/main.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'public/views/about.html',
      controller: 'AboutCtrl'
    })
    .state('payment', {
      url: '/payment',
      templateUrl: 'public/views/payment.html',
      controller: 'PaymentCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'public/views/admin.html',
      controller: 'AdminCtrl' 
    })
    .state('products', {
      url: '/products',
      templateUrl: 'public/views/products.html',
      controller: 'ProductCtrl'
    })
    .state('art', {
      url: '/art',
      templateUrl: '/public/views/art.html',
      controller: 'ArtCtrl'
    });
}]);