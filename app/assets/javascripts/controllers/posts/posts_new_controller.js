angular.module('reddit-clone')
  .controller('PostsNewCtrl', ['$scope', 'Post', '$location', function($scope, Post, $location){
  $scope.post = {};

  $scope.createPost = function(){
    if($scope.post.title === '' || $scope.post.content === '') { return; }

    Post.save($scope.post, function() {
      $scope.post = {};
    });
  };
}]);
