var app = angular.module('Guram_Guram', ['ui.router', 'ui.materialize', 'ngAnimate']);
console.log('gurame gurame');

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/views/main.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/views/about.html',
      controller: 'AboutCtrl'
    })
    .state('payment', {
      url: '/payment',
      templateUrl: 'app/views/payment.html',
      controller: 'PaymentCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/views/signin.html',
      controller: 'AdminCtrl' 
    })
    .state('products', {
      url: '/products',
      templateUrl: 'app/views/products.html',
      controller: 'ProductCtrl'
    })
    .state('art', {
      url: '/art',
      templateUrl: 'app/views/art.html',
      controller: 'ArtCtrl'
    });

    // $locationProvider.html5Mode(true);

}]);
