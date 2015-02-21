/**
 * Services that persists and retrieves TODOs from localStorage.
 */

app.factory('todoStorage', function () {
  var STORAGE_ID = 'todos-angularjs-closeheat';

  return {
    get: function () {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },

    put: function (todos) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    }
  };
});
