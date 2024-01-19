var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// declare empty array
var todos = [];

// this function is what shows the already-entered items into the todo list.
function renderTodos() {
  //  the first line sets the contents of the todo list itself to a blank state, while the second defines the number value entered into the todoCountSpan element (#todo-count) by calling the length of the todos array.
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // this for loop starts by accessing the current todo item array and adds an additional list item, sets the text content of that list item to the current todo, sets a data-attribute of "data-index" to the current list item, creates a new button element, sets the text content of that button element to "Complete ✔️", appends button as child of list item, then appends list item as child of the todoList element.
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
function init() {
  //retrieves existing todos stored in localStorage and parses them as an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // checks if stored todos exist, and if they do, assigns them to the global variable "todos"
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // this runs the renderTodos function described above.
  renderTodos();
}

function storeTodos() {
  // sets a localStorage item to store todo entries and turns them into a JSON string.
  localStorage.setItem("todos", JSON.stringify(todos));
}
// on submit, adds a new item to the todos variable
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // if the form field is empty, exit/end the function.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
