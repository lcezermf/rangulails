angular.module('reddit-clone')
  .controller('PostsShowCtrl', ['$scope', 'Post', '$routeParams', function($scope, Post, $routeParams){

  Post.get({ id: $routeParams.id }, function(data){
    $scope.post = data;
  });

}]);
