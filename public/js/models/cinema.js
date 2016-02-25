angular
  .module('Cinem@pp')
  .factory('Cinema', Cinema);

Cinema.$inject = ['$resource', 'API'];
function Cinema($resource, API){

  return $resource(
    API+'/cinemas/:id',
    {id: '@_id'},
    { 'get':    { method: 'GET' },
      'save':   { method: 'POST' },
      'query':  { method: 'GET', isArray: true},
      'remove': { method: 'DELETE' },
      'delete': { method: 'DELETE' },
      'update': { method: 'PUT' }
    }
  );
}
