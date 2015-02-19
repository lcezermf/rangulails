angular.module('reddit-clone')
  .controller('PostsIndexCtrl', ['$scope', 'Posts', '$route', function($scope, Posts, $route){

  $scope.posts = [];

  Posts.query(function(data){
    $scope.posts = data;
  });

  $scope.hi = function(){
    console.log('kk')
  }

  $scope.destroyPost = function(post){
    var confirmation = confirm('Deseja realmente apagar ?');
    if(confirmation) {
      post.$delete(function(){
        $route.reload();
      });
    };
  };

  // Usando ng-href, elimina o uso do ng-click="showPost(post.id)"
  // $scope.showPost = function(id) {
  //   $location.url('/posts/' + id);
  // }

}]);
