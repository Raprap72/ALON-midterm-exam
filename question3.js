let tasks = []; // Array to store tasks
let taskId = 1;

// Function to add a task
function addTask(name, description) {
    const task = { id: taskId++, name, description };
    tasks.push(task);
    return task;
}

// Function to get all tasks
function getAllTasks() {
    return tasks;
}

// Function to update a task
function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        return task;
    }
    return null;
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
}

// Example Usage
addTask('Study', 'Study for the exam');
console.log(getAllTasks());
updateTask(1, 'Read', 'Read a book');
console.log(getAllTasks());
deleteTask(1);
console.log(getAllTasks());
