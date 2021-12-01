import _ from 'lodash';
import './style.css';

const tasksBoard = document.getElementById('todo-list');
let task1 = {description: "Task One", completed: false, index: 0};
let task2 = {description: "Task Two", completed: false, index: 1};
let task3 = {description: "Task Three", completed: true, index: 2};
let toDoList = [task1, task2, task3];


function displayTasks() {
    const li = document.createElement('li');
  
   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    return element;
  }

  let li = document.createElement('li');
  let content = document.createTextNode("Test");
  
  tasksBoard.appendChild(li.appendChild(content));
  tasksBoard.insertAdjacentHTML('beforeend', '<li id="two">two</div>');
  