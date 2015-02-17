angular.module('reddit-clone').controller('PostsIndexCtrl', ['$scope', 'Posts', '$location', function($scope, Posts, $location){
  $scope.posts = [];

  Posts.query(function(data){
    $scope.posts = data;
  });

  // $scope.showPost = function(id) {
  //   $location.url('/posts/' + id);
  // }

}]);
