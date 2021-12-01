import _ from 'lodash';
import './style.css';

const tasksBoard = document.getElementById('todo-list');

// Dummy objects
let task1 = {description: "Task One", completed: false, index: 0};
let task2 = {description: "Task Two", completed: false, index: 1};
let task3 = {description: "Task Three", completed: true, index: 2};

// Array with objects

let toDoList = [task1, task2, task3];


function displayTasks() {

   // Lodash, now imported by this script
    for (let i = 0; i < toDoList.length; i += 1) {
      tasksBoard.insertAdjacentHTML('beforeend', `<li>${toDoList[i].description}</li>`)
    }
  }

  
  displayTasks();