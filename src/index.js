import './style.css';
import { isChecked, checkBox } from './checkbox.js';

const tasksBoard = document.getElementById('todo-list');

// Dummy objects
const task1 = { description: 'Task Two', completed: false, index: 1 };
const task2 = { description: 'Task One', completed: false, index: 0 };
const task3 = { description: 'Task Three', completed: true, index: 2 };

// Array with objects

let toDoList = [task1, task2, task3];

function checkLs() {
  if (!localStorage.getItem('TodoList')) {
    
  } else {
    toDoList = JSON.parse(localStorage.getItem('TodoList'));
  }
}

function updateLs(toDoList) {
  localStorage.setItem('TodoList', JSON.stringify(toDoList));
}

function displayTasks() {
  const sortedTasks = toDoList.sort((a, b) => a.index - b.index);

  for (let i = 0; i < sortedTasks.length; i += 1) {
    tasksBoard.insertAdjacentHTML('beforeend', `<li><input type='checkbox' ${isChecked(sortedTasks[i].completed)}>${sortedTasks[i].description}</li>`);
  }
}

checkLs();
displayTasks();