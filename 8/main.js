'use strict';

function createAppTitle(title) {
  let appTitle = document.createElement('h2');
  appTitle.textContent = title;
  return appTitle;
}

function createToDoItemForm() {
  let form = document.createElement('form');
  let input = document.createElement('input');
  let buttonWrapper = document.createElement('div');
  let button = document.createElement('button');

  form.classList.add('input-group', 'mb-3');
  input.classList.add('form-control');
  input.placeholder = 'Add a new todo item';
  buttonWrapper.classList.add('input-group-append');
  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Add';
  button.disabled = true;

  // If there is text in the input, enable the button
  // Otherwise, disable it
  input.addEventListener('input', function () {
    button.disabled = !input.value;
  });

  buttonWrapper.appendChild(button);
  form.appendChild(input);
  form.appendChild(buttonWrapper);

  return {
    form: form,
    input: input,
    button: button
  };
}

function createTodoList(localStorageKey) {
  let list = document.createElement('ul');
  list.id = localStorageKey;
  list.classList.add('list-group');
  return list;
}

function createToDoItem(text) {
  let item = document.createElement('li');
  let buttonGroup = document.createElement('div');
  let doneButton = document.createElement('button');
  let deleteButton = document.createElement('button');

  item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  item.textContent = text;

  buttonGroup.classList.add('btn-group', 'btn-group-md');
  doneButton.classList.add('btn', 'btn-success');
  doneButton.textContent = 'Done';
  deleteButton.classList.add('btn', 'btn-danger');
  deleteButton.textContent = 'Delete';

  buttonGroup.appendChild(doneButton);
  buttonGroup.appendChild(deleteButton);
  item.appendChild(buttonGroup);

  doneButton.addEventListener('click', function () {
    item.classList.toggle('list-group-item-success');
    updateLocalStorage(item.parentElement.id);
  });

  deleteButton.addEventListener('click', function () {
    if (confirm('Are you sure?')) {
      let parent = item.parentElement;
      item.remove();
      updateLocalStorage(parent.id);

    }
  });

  return {
    item: item,
    doneButton: doneButton,
    deleteButton: deleteButton
  };
}

function updateLocalStorage(localStorageKey) {
  let todoItems = document.getElementById(localStorageKey).children;
  let objects = [];
  
  for (let item of todoItems) {
    let todoItem = {
      name: item.childNodes[0].textContent,
      done: item.classList.contains('list-group-item-success')
    };
    objects.push(todoItem);
  }

  if (objects.length <= 0) {
    localStorage.removeItem(localStorageKey);
    return;
  }

  console.log(objects);
  localStorage.setItem(localStorageKey, JSON.stringify(objects));
}

function createToDoApp(container, title = 'ToDo list', items = [], localStorageKey = 'todo-items') {
  let todoAppTitle = createAppTitle(title);
  let todoItemForm = createToDoItemForm();
  let todoList = createTodoList(localStorageKey);

  let localStorageItems = JSON.parse(localStorage.getItem(localStorageKey));

  if (localStorageItems && localStorageItems.length > 0) {
    items = localStorageItems;
  }
  for (let item of items) {
    let todoItem = createToDoItem(item.name);
    if (item.done) {
      todoItem.item.classList.toggle('list-group-item-success');
    }
    todoList.appendChild(todoItem.item);
  }

  todoItemForm.form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!todoItemForm.input.value) {
      return;
    }

    let todoItem = createToDoItem(todoItemForm.input.value);

    todoList.appendChild(todoItem.item);
    todoItemForm.input.value = '';
    todoItemForm.button.disabled = true;

    updateLocalStorage(localStorageKey);
  });

  container.appendChild(todoAppTitle);
  container.appendChild(todoItemForm.form);
  container.appendChild(todoList);
}

// document.addEventListener('DOMContentLoaded', function () {
//   createToDoApp(document.getElementById('first-todo'), 'Todo list #1');
//   createToDoApp(document.getElementById('second-todo'), 'Todo list #2');
//   createToDoApp(document.getElementById('third-todo'), 'Todo list #3');

// });