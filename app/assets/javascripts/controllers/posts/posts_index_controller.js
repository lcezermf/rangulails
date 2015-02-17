angular.module('reddit-clone').controller('PostsIndexCtrl', ['$scope', '$http', function($scope, $http){
  // $scope.posts = [
  //   { title: 'Title', content: 'Content' },
  //   { title: 'Title', content: 'Content' },
  //   { title: 'Title', content: 'Content' },
  //   { title: 'Title', content: 'Content' }
  // ]

  $scope.posts = [];

  $http.get('./posts.json').success(function(data){
    console.log(data);
    $scope.posts = data;
  }).error(function(data){
    console.log('error: ' + data);
  }) ;

}]);
