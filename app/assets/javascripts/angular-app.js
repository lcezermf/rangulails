var app = angular.module('reddit-clone', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/posts', {
      templateUrl: '../assets/posts/index.html',
      controller: 'PostsIndexCtrl'
    })
    .when('/posts/:id', {
      templateUrl: '../assets/posts/show.html',
      controller: 'PostsShowCtrl'
    })
    .otherwise({
      templateUrl: '../assets/main/index.html',
      controller: 'MainIndexCtrl'
    });

  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);
