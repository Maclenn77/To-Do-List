import './style.css';
import { isChecked, checkBox } from './checkbox.js';

const tasksBoard = document.getElementById('todo-list');
const checkTasks = document.querySelectorAll('input');

// Dummy objects
const task1 = { description: 'Task Two', completed: false, index: 1 };
const task2 = { description: 'Task One', completed: false, index: 0 };
const task3 = { description: 'Task Three', completed: true, index: 2 };

// Array with objects
let toDoList = [task1, task2, task3];

// Local Storage
function checkLs() {
  if (!localStorage.getItem('TodoList')) {
    localStorage.setItem('TodoList', JSON.stringify(toDoList));
  } else {
    toDoList = JSON.parse(localStorage.getItem('TodoList'));
  }
}

function updateLs() {
  localStorage.setItem('TodoList', JSON.stringify(toDoList));
}

// Display

function displayTasks() {
  const sortedTasks = toDoList.sort((a, b) => a.index - b.index);

  for (let i = 0; i < sortedTasks.length; i += 1) {
    tasksBoard.insertAdjacentHTML('beforeend', `<li class='task'><input type='checkbox' id='${sortedTasks[i].index}' ${isChecked(sortedTasks[i].completed)}>${sortedTasks[i].description}</li>`);
  }
}

checkLs();
displayTasks();

// Event Listeners

checkTasks.forEach(function(checkbox) {
  checkbox.addEventListener('click', (e) => {
    checkBox(toDoList, e.target.id);
    updateLs();
  });
});

