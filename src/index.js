import './style.css';

const tasksBoard = document.getElementById('todo-list');

// Dummy objects
const task1 = { description: 'Task One', completed: false, index: 0 };
const task2 = { description: 'Task Two', completed: false, index: 1 };
const task3 = { description: 'Task Three', completed: true, index: 2 };

// Array with objects

const toDoList = [task1, task2, task3];

function isChecked(task) {
  if (task === true) {
    return 'checked';
  } 
  return '';
}

function displayTasks() {
  for (let i = 0; i < toDoList.length; i += 1) {
    tasksBoard.insertAdjacentHTML('beforeend', `<li><input type='checkbox' ${isChecked(toDoList[i].completed)}>${toDoList[i].description}</li>`);
  }
}

displayTasks();