var app = angular.module('Gurame_Gurame', ['ui.router', 'ui.materialize', 'ngLettering']);
console.log('gurame gurame');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('payment', {
      url: '/payment',
      templateUrl: 'views/payment.html',
      controller: 'PaymentCtrl'
    });
}]);