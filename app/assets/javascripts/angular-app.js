var app = angular.module('reddit-clone', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/posts', {
      templateUrl: '../assets/posts/index.html',
      controller: 'PostsIndexCtrl'
    })
    .otherwise({
      templateUrl: '../assets/main/index.html',
      controller: 'MainIndexCtrl'
    });
}]);

// app.factory('Posts', function($resource) {
//   return $resource('/posts:id');
// });
