const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const taskController = require("./controllers/taskController");
const errorController = require("./controllers/errorController");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/data", taskController.data);

app.get("/tasks", taskController.getAllTasks);
app.post("/tasks", taskController.addTask);
app.get("/tasks/:id", taskController.getTask);
app.put("/tasks/:id", taskController.editTask);
app.put("/tasks/complete/:id", taskController.completeTask);
app.put("/tasks/uncomplete/:id", taskController.uncompleteTask);
app.delete("/tasks/:id", taskController.deleteTask);

app.use(errorController);

app.listen(3000);
