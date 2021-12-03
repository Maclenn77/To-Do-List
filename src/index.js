import './style.css';
import { isChecked, checkBox } from './checkbox.js';
import Task, * as crud from './crud.js';

const tasksBoard = document.getElementById('todo-list');
const clearButton = document.getElementById('clear');
const submitBox = document.getElementById('new-task');
let checkTasks = document.querySelectorAll('input[type=checkbox][name=checkbox]');

// Array with object

let toDoList = [];

// Local Storage
function checkLs() {
  if (!localStorage.getItem('TodoList')) {
    localStorage.setItem('TodoList', JSON.stringify(toDoList));
  } else {
    toDoList = JSON.parse(localStorage.getItem('TodoList'));
  };
}

function displayTasks() {
  const sortedTasks = toDoList.sort((a, b) => a.index - b.index);

  for (let i = 0; i < sortedTasks.length; i += 1) {
    tasksBoard.insertAdjacentHTML('beforeend', `<li class='task'><input type='checkbox' name='checkbox' id='${sortedTasks[i].index}' ${isChecked(sortedTasks[i].completed)}>${sortedTasks[i].description} <button data-index='${sortedTasks[i].index}'> X </button></li>`);
    checkTasks = document.querySelectorAll('input[type=checkbox][name=checkbox]');
  }
}

checkLs();
displayTasks();

// Event Listeners

submitBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    crud.createTask(e.target.value, toDoList)
    const i = toDoList.length - 1;
    tasksBoard.insertAdjacentHTML('beforeend', `<li class='task'><input type='checkbox' name='checkbox' id='${toDoList[i].index}' ${isChecked(toDoList[i].completed)}>${toDoList[i].description} <button data-index='${toDoList[i].index}'> X </button></li>`);
  };
  checkTasks = document.querySelectorAll('input[type=checkbox][name=checkbox]');
});

checkTasks.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    checkBox(toDoList, e.target.id);
  });
});

tasksBoard.addEventListener('click', (x) => {
  const id = x.target.getAttribute('data-index')
  const index = parseInt(x.target.getAttribute('data-index')) - 1;
  const removed = toDoList[index]
  crud.removeTaskFrom(toDoList, removed);
  const element = document.getElementById(id);
  element.parentElement.remove();
});

clearButton.addEventListener('click', () => {
  const clearedTasks = crud.removeAllFrom(toDoList);
  clearedTasks.forEach((task) => {
    id = task.index.toString();
    const element = document.getElementById(id);
    element.parentElement.remove();
  });
});