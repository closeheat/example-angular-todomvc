// Angular is defined as window.angular upon require
require('angular');
require('angularfire');

window.app = angular.module('todomvc', ['firebase']);

require('./controllers/todo');
require('./directives/todo_focus');
require('./services/todo_storage');
