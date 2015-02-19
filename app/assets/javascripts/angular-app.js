var app = angular.module('reddit-clone', ['custom-directives', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/posts/new', {
      templateUrl: '../assets/posts/new.html',
      controller: 'PostsNewCtrl'
    })
    .when('/posts', {
      templateUrl: '../assets/posts/index.html',
      controller: 'PostsIndexCtrl'
    })
    .when('/posts/:id', {
      templateUrl: '../assets/posts/show.html',
      controller: 'PostsShowCtrl'
    })
    .when('/posts/:id/edit', {
      templateUrl: '../assets/posts/edit.html',
      controller: 'PostsEditCtrl'
    })
    .otherwise({
      templateUrl: '../assets/main/index.html',
      controller: 'MainIndexCtrl'
    });

  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);
