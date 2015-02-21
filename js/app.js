// Angular is defined as window.angular upon require
require('angular');

window.app = angular.module('todomvc', []);

require('./controllers/todo');
require('./directives/todo_focus');
require('./services/todo_storage');
