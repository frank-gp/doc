let tasks = [
  { id: 1, title: "tarea 1", completed: false },
  { id: 2, title: "tarea 2", completed: true },
];

const data = (req, res) => {
  res.json(tasks);
};

const getAllTasks = (req, res) => {
  res.render("home.ejs", {
    title: "List task",
    tasks,
  });
};

const getAddTaskForm = (req, res) => {
  res.render("add.ejs", { title: "add task" });
};

const addTask = (req, res) => {
  let { title } = req.body;
  let id = tasks.length++;
  tasks.push({ id, title, complete: false });
  console.log(req.body);
  res.redirect("/");
};

const getEditTaskForm = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (!task) {
    res.redirect("/");
  } else {
    res.render("edit.ejs", { title: "Edit Task", task });
  }
};

const editTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);
  console.info(taskIndex);

  if (taskIndex === -1) {
    res.redirect("/");
  } else {
    tasks[taskIndex].title = req.body.title;
    res.redirect("/");
  }
};

const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = true;
  }
  res.redirect("/");
};

const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = false;
  }
  res.redirect("/");
};

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);
  res.redirect("/");
};

module.exports = {
  data,
  getAllTasks,
  getAddTaskForm,
  addTask,
  getEditTaskForm,
  editTask,
  completeTask,
  uncompleteTask,
  deleteTask,
};
