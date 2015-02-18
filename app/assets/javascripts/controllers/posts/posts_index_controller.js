angular.module('reddit-clone').controller('PostsIndexCtrl', ['$scope', 'Posts', '$location', function($scope, Posts, $location){
  $scope.posts = [];

  Posts.query(function(data){
    $scope.posts = data;
  });

  // Usando ng-href, elimina o uso do ng-click="showPost(post.id)"
  // $scope.showPost = function(id) {
  //   $location.url('/posts/' + id);
  // }

}]);
