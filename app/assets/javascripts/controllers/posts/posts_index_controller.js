angular.module('reddit-clone')
  .controller('PostsIndexCtrl', ['$scope', 'Post', '$route', function($scope, Post, $route){

  $scope.posts = [];

  Post.query(function(data){
    $scope.posts = data;
  });

  $scope.destroyPost = function(post){
    var confirmation = confirm('Deseja realmente apagar ?');
    if(confirmation) {
      Post.delete({ id: post.id }, function(){
        $route.reload();
      });
    };
  };

}]);
