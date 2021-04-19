angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'gather requirements for this "to do" app', done:false},
      {text:'build the app in angular', done:false},
      {text:'create selenium unit tests', done:false},
      {text:'build internal selenium grid, buy devices, fund & setup a test lab - $$$', done:false},
      {text:'hire 1 FTE to manage/maintain lab and browsers - even more $$$', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });