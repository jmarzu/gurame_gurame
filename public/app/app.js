var app = angular.module('Gurame_Gurame', ['ui.router', 'ui.materialize', 'ngLettering', 'ngAnimate']);
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
    });
}]);