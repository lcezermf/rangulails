angular.module('reddit-clone')
  .controller('PostsEditCtrl', ['$scope', 'Posts', '$routeParams', '$location',function($scope, Posts, $routeParams, $location){

  Posts.get({ id: $routeParams.id }, function(data){
    $scope.post = data;
  });

  $scope.updatePost = function(post){
    if($scope.post.title === '' || $scope.post.content === '') { return; }

    $scope.post.$update({ title: post.title, content: post.content }, function(){
      $location.url('/posts');
    })
  }

}]);
