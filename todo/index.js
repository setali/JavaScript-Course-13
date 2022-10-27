var root = document.getElementById('root')

var todoList = document.createElement('ol')

var form = document.createElement('form')
form.addEventListener('submit', function (event) {
  event.preventDefault()

  var value = input.value

  if (!value) return

  addTodo(value) // Add to dom
  saveTodo(value) //  Add to local storage
  input.value = ''
})

var input = document.createElement('input')
input.setAttribute('placeholder', 'Todo')
input.setAttribute('name', 'todo')

var button = document.createElement('button')
button.setAttribute('type', 'submit')
button.textContent = 'Add'

form.appendChild(input)
form.appendChild(button)

root.appendChild(form)
root.appendChild(todoList)

function addTodo (value) {
  var todo = document.createElement('li')
  todo.textContent = value

  var deleteIcon = document.createElement('span')
  deleteIcon.textContent = 'x'
  deleteIcon.style.color = 'red'
  deleteIcon.style.margin = '10px'
  deleteIcon.style.cursor = 'pointer'
  deleteIcon.addEventListener('click', function (event) {
    event.target.parentElement.remove()
    removeTodo(value)
  })

  todo.appendChild(deleteIcon)

  todoList.appendChild(todo)
}

function saveTodo (value) {
  var todos = getTodos()
  todos.push(value)

  saveTodos(todos)
}

function saveTodos (todos) {
  var todosString = JSON.stringify(todos)
  localStorage.setItem('todos', todosString)
}

function getTodos () {
  var todos = localStorage.getItem('todos')

  if (todos) {
    return JSON.parse(todos)
  } else {
    return []
  }
}

function removeTodo (value) {
  var todos = getTodos()

  var newTodos = todos.filter(function (el) {
    return el !== value
  })

  saveTodos(newTodos)
}

function loadTodos () {
  var todos = getTodos()

  todos.forEach(function (todo) {
    addTodo(todo)
  })
}

loadTodos()
