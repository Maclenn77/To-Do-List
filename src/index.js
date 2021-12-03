import './style.css';
import { isChecked, checkBox } from './checkbox.js';
import * as crud from './crud.js';

const tasksBoard = document.querySelector('#todo-list');
const clearButton = document.getElementById('clear');
const submitBox = document.getElementById('new-task');

// Array with object

let toDoList = [];

// Local Storage
function checkLs() {
  if (!localStorage.getItem('TodoList')) {
    localStorage.setItem('TodoList', JSON.stringify(toDoList));
  } else {
    toDoList = JSON.parse(localStorage.getItem('TodoList'));
  }
}

function displayTasks() {
  const sortedTasks = toDoList.sort((a, b) => a.index - b.index);

  for (let i = 0; i < sortedTasks.length; i += 1) {
    tasksBoard.insertAdjacentHTML('beforeend', `<li id='${sortedTasks[i].index}'><input type='checkbox' class='checkbox' ${isChecked(sortedTasks[i].completed)}><span class='description'>${sortedTasks[i].description} </span><button class='remove-button' data-index='${sortedTasks[i].index}'> x </button></li>`);
  }
}

checkLs();
displayTasks();

// Event Listeners

submitBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const task = crud.createTask(e.target.value, toDoList);
    tasksBoard.insertAdjacentHTML('beforeend', `<li class='task' id='${task.index}'><input type='checkbox' class='checkbox' ${isChecked(task.completed)}><span class='description' contenteditable='false'>${task.description} </span><button class='remove-button' data-index='${task.index}'> x </button></li>`);
  }
});

tasksBoard.addEventListener('click', (x) => {
  const id = x.target.parentElement.getAttribute('id');
  const index = parseInt(id, 10) - 1;
  const task = toDoList[index];
  if (x.target.classList.contains('checkbox')) {
    checkBox(task, toDoList);
  } else if (x.target.classList.contains('remove-button')) {
    const removed = task;
    crud.removeTaskFrom(toDoList, removed);
  } else if (x.target.classList.contains('description')) {
    x.target.setAttribute('contenteditable', 'true');
    const edit = document.querySelector('[contenteditable=true]');
    edit.parentElement.style.background = '#fffeca';
    edit.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        edit.setAttribute('contenteditable', 'false');
        edit.parentElement.style.background = '#fff';
        crud.update(task, edit.textContent, toDoList);
      }
    });
  }
});

clearButton.addEventListener('click', () => {
  crud.removeAllFrom(toDoList);
});