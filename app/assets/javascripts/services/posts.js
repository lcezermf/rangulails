angular.module('reddit-clone').factory('Posts', function($resource) {
  return $resource('/posts:id', { id: "@id" },
    {
      'index': { method: 'GET', isArray: true }
    }
  );
});
