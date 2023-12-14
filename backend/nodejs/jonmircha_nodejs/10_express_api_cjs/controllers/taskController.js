let tasks = [
  { id: 1, title: "tarea 1", completed: false },
  { id: 2, title: "tarea 2", completed: true },
];

const data = (req, res) => {
  res.json(tasks);
};

const getAllTasks = (req, res) => {
  res.json(tasks);
};

const addTask = (req, res) => {
  let { title } = req.body;

  if (!title) {
    res.status(404).json({ err: true, message: "title no exist" });
  } else {
    let id = tasks.length + 1;
    tasks.push({ id, title, complete: false });
    res.json({ err: false, message: "task add" });
  }
};

const getTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);
  console.info(taskIndex);

  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: "task no found" });
  } else {
    res.json({ task: tasks[taskIndex] });
  }
};

const editTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);
  console.info(taskIndex);

  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: "task no found" });
  } else {
    tasks[taskIndex].title = req.body.title;
    res.json({ err: false, message: "task add" });
  }
};

const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = true;
    res.json({ err: false, message: "task complete" });
  } else {
    res.status(404).json({ err: true, message: "task no found" });
  }
};

const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = false;
    res.json({ err: false, message: "task uncomplete" });
  } else {
    res.status(404).json({ err: true, message: "task no found" });
  }
};

let result = tasks.slice(0, 1);

console.log(result); // Outputs: []

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: "task no found" });
  } else {
    tasks.splice(taskIndex, 1);
    res.json({ err: false, message: "task delete" });
  }
};

module.exports = {
  data,
  getAllTasks,
  addTask,
  getTask,
  editTask,
  completeTask,
  uncompleteTask,
  deleteTask,
};
