angular
  .module('Cinem@pp')
  .factory('Movie', Movie);

Movie.$inject = ['$resource', 'API'];
function Movie($resource, API){

  return $resource(
    API+'/movies/:id',
    {id: '@id'},
    { 'get':    { method: 'GET' },
      'save':   { method: 'POST' },
      'query':  { method: 'GET', isArray: true},
      'remove': { method: 'DELETE' },
      'delete': { method: 'DELETE' },
      'update': { method: 'PUT' }
    }
  );
}
