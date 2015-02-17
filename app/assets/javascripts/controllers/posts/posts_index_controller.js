angular.module('reddit-clone').controller('PostsIndexCtrl', ['$scope', 'Posts', function($scope, Posts){
  $scope.posts = [];

  Posts.query(function(data){
    $scope.posts = data;
  });

}]);
