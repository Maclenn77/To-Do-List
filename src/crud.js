// File with CRUD methods
export function updateLs(thelist) {
  localStorage.setItem('TodoList', JSON.stringify(thelist));
}

export default class Task {
  constructor(description, thelist) {
    this.index = thelist.length + 1;
    this.description = description;
    this.completed = false;
    thelist = thelist.push(this);
  }
}

export function update(task, description, thelist) {
  task.description = description;
  updateLs(thelist);
}

export function removeTaskFrom(thelist, removed) {
  const ind = removed.index
  const element = document.getElementById(ind.toString());
  element.remove();
  let index = ind - 1;  
  thelist.forEach((task) => {
    if (task.index > ind) {
      let i = task.index.toString();
      task.index = task.index - 1;
      let element = document.getElementById(i);
      element.id = task.index.toString();
    };
  });
  thelist.splice(index, 1);
  updateLs(thelist);
}

export function createTask(description, thelist) {
  let task = new Task(description, thelist);
  updateLs(thelist);
} 

export function removeAllFrom(thelist) {
  const tasksCompleted = thelist.filter( task => task.completed === true );

  tasksCompleted.forEach((task) => {
    removeTaskFrom(thelist, task);
  });
}

export function populate(thelist) {
  createTask('This a an example task', thelist);
  createTask('This another example task', thelist);
  createTask('You can remove and modify these tasks :)', thelist);
}