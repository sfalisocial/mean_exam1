
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($httpProvider, $routeProvider) {
$httpProvider.interceptors.push(
  function($q, $location) {
  return {
      'responseError':function(rejection){
      if (rejection.status == 401){
          $location.url('/');
      }
      return $q.reject(rejection);
  }
};
});
  $routeProvider
  .when('/home',{
      templateUrl: 'assets/partials/home.html',
      controller: 'homeController',
      controllerAs: "meep"
  })
  .when('/#/home',{
      templateUrl: 'assets/partials/home.html',
      controller: 'homeController',
      controllerAs: "meep"
  })
  .when('/',{
      templateUrl: 'assets/partials/login.html',
      controller: 'userController'
  })
    .otherwise({
      redirectTo: '/'
    });
});
