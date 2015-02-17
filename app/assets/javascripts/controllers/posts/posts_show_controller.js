angular.module('reddit-clone')
  .controller('PostsShowCtrl', ['$scope', 'Posts', '$routeParams', function($scope, Posts, $routeParams){

  Posts.get({ id: $routeParams.id }, function(data){
    $scope.post = data;
  });

}]);
