// File with CRUD methods

let toDoList = [];

class Task {
    constructor(description) {
        this.index = toDoList.length + 1;
        this.description = description;
        this.completed = false;
      }
    }
}

function createTask(description) {
    // Create new object Task
} 

function update(task) {
    // Update the task
}

function remove(task) {
    // Delete a unique task
}

function removeAllTasks() {
    // Remove all completed tasks
}