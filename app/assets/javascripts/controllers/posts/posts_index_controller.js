angular.module('reddit-clone')
  .controller('PostsIndexCtrl', ['$scope', 'Posts', '$route', function($scope, Posts, $route){

  $scope.posts = [];

  Posts.query(function(data){
    $scope.posts = data;
  });

  $scope.destroyPost = function(post){
    var confirmation = confirm('Deseja realmente apagar ?');
    if(confirmation) {
      post.$delete(function(){
        $route.reload();
      });
    };
  };

}]);
