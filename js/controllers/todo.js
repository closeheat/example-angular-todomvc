/**
 * The main controller for the app. The controller:
 * - retrieves and persist the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */

app.controller('TodoController', ['$scope', '$location', 'todoStorage', 'filterFilter', '$firebaseArray',
  function TodoController($scope, $location, todoStorage, filterFilter, $firebaseArray) {
    var url = 'https://fides.firebaseio.com/todos';
    var fireRef = new Firebase(url);

    // Bind the todos to the firebase provider.
    var todos = $scope.todos = $firebaseArray(fireRef);

    $scope.newTodo = '';
    $scope.editedTodo = null;

    $scope.$watch('todos', function () {
      $scope.remainingCount = filterFilter(todos, { completed: false }).length;
      $scope.doneCount = todos.length - $scope.remainingCount;
      $scope.allChecked = !$scope.remainingCount;
      todoStorage.put(todos);
    }, true);

    if ($location.path() === '') {
      $location.path('/');
    }

    $scope.location = $location;

    $scope.$watch('location.path()', function (path) {
      $scope.statusFilter = (path === '/active') ?
        { completed: false } : (path === '/completed') ?
        { completed: true } : null;
    });


    $scope.addTodo = function () {
      var newTodo = $scope.newTodo.trim();
      if (!newTodo.length) {
        return;
      }
      $scope.todos.$add({
        title: newTodo,
        completed: false
      });
      $scope.newTodo = '';
    };


    $scope.editTodo = function (todo) {
    };


    $scope.doneEditing = function (todo) {
    };


    $scope.removeTodo = function (todo) {
    };


    $scope.clearDoneTodos = function () {
    };


    $scope.markAll = function (done) {
    };
  }
]);
