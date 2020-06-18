var todoList = [];

function Todo(description, index) {
  this.description = description;
  this.id = description.toLowerCase().slice(0, 10).replace(' ', '-') + index;
  this.completed = false;
}

function buildTodo(todoText) {
  var index = todoList.length;
  return new Todo(todoText, index);
}

function findTodoById(id){
  return todoList.find(function(todo) {
    return todo.id == id;
  });
}

function toggleTodoCompleted(todo) {
  todo.completed = !todo.completed;
}

function deleteTodo(todoToRemove, todoList) {
  var indexInArray = todoList.findIndex(function(todo) {
    return todo.id == todoToRemove.id;
  });
  todoList.splice(indexInArray, 1);
}

function buildTodoInputTag(todo) {
  var input = document.createElement('input');
  input.addEventListener('change', function(e) {
    var todoId = e.currentTarget.id;
    var todoToToggle = findTodoById(todoId);
    toggleTodoCompleted(todoToToggle);
  });
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', todo.id);
  return input;
}

function buildLabelTag(todo) {
  var label = document.createElement('label');
  label.setAttribute('for', todo.id);
  label.appendChild(document.createTextNode(todo.description));
  return label;
}

function buildDeleteButtonTag(todo, todoList) {
  var deleteButton = document.createElement('span');
  deleteButton.addEventListener('click', function(e) {
    var element = e.currentTarget.parentNode;
    var todoId = element.firstChild.id;
    deleteTodo(findTodoById(todoId), todoList);
    element.parentNode.removeChild(element);
  });
  deleteButton.setAttribute('class', 'delete-x');
  deleteButton.appendChild(document.createTextNode('x'));
  return deleteButton;
}

function addTodoToHtmlList(todo, todoList) {
  var ul = document.querySelectorAll('ul#todo-list')[0];
  var li = document.createElement('li');

  var input = buildTodoInputTag(todo);
  var label = buildLabelTag(todo);
  var deleteButton = buildDeleteButtonTag(todo, todoList);

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(deleteButton);
  ul.appendChild(li);
}

document.forms.namedItem('add-todo').addEventListener('submit', function(e) {
  e.preventDefault();
  var text = document.forms.namedItem('add-todo').elements.namedItem('todo-input').value;
  var todo = buildTodo(text);
  todoList.push(todo);
  addTodoToHtmlList(todo, todoList);
  document.forms.namedItem('add-todo').elements.namedItem('todo-input').value = '';
});

document.addEventListener("DOMContentLoaded", function(){
console.log('hello')
});
