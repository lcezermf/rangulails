angular.module('reddit-clone').controller('PostsNewCtrl', ['$scope', 'Posts', function($scope, Posts){
  $scope.post = {};

  $scope.createPost = function(){
    if($scope.post.title === '' || $scope.post.content === '') { return; }

    Posts.save($scope.post, function() {
      $scope.post = {};
    });
  };
}]);
