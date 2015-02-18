var app = angular.module('custom-directives', []);

app.directive('postTitle', function(){
  return {
    restrict: 'E',
    templateUrl: '../assets/directives/post_title.html'
  };
});

app.directive('postContent', function(){
  return {
    restrict: 'E',
    templateUrl: '../assets/directives/post_content.html'
  };
});
