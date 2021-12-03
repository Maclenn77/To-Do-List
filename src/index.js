import './style.css';
import { isChecked, checkBox } from './checkbox.js';
import Task, * as crud from './crud.js';

const tasksBoard = document.getElementById('todo-list');
const clearButton = document.getElementById('clear');
const submitBox = document.getElementById('new-task');
let checkTasks = document.querySelectorAll('input[type=checkbox][name=checkbox]');

// Array with objects

let toDoList = [];

// Local Storage
function checkLs() {
  if (!localStorage.getItem('TodoList')) {
    localStorage.setItem('TodoList', JSON.stringify(toDoList));
  } else {
    crud.populate(toDoList);
    toDoList = JSON.parse(localStorage.getItem('TodoList'));
  }
}

// Display

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
    let task = new Task(e.target.value, toDoList);
  }
  crud.updateLs(toDoList);
})

checkTasks.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    checkBox(toDoList, e.target.id);
    crud.updateLs(toDoList);
  });
});

// removeButtons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     const index = parseInt(e.target.id, 10) - 1;
//     const removed = toDoList[index]
//     crud.removeTaskFrom(toDoList, removed);
//     const element = document.getElementById(e.target.id);
//     element.parentElement.remove();
//   });
// });
// const index = event.target.getAttribute('data-index');
// newIconTrash.setAttribute('data-index', item.index); 

tasksBoard.addEventListener('click', (x) => {
  const index = parseInt(x.target.getAttribute('data-index')) - 1;
  const removed = toDoList[index]
  crud.removeTaskFrom(toDoList, removed);
  const element = document.getElementById(x.target.id);
  element.parentElement.remove();
});

clearButton.addEventListener('click', () => {
  const clearedTasks = crud.removeAllFrom(toDoList);
});