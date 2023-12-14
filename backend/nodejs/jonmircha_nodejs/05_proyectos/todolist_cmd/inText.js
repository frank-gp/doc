import { readFileSync, writeFileSync } from "fs";
import { createInterface } from "readline";

const tasks = [];
const DB_FILE = "tasks.txt";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log("===  To do list  ===");
  console.log("1. add task");
  console.log("2. list task");
  console.log("3. complete task");
  console.log("4. exit");
  console.log("\n");
}

function loadTasks() {
  try {
    const data = readFileSync(DB_FILE, "utf-8");
    const lines = data.split("\n");
    tasks.length = 0;

    lines.forEach((element) => {
      if (element.trim() !== "") {
        const [task, complete] = element.split("|");
        tasks.push({ task, complete: complete === true });
      }
    });
    console.log("tareas cargadas");
  } catch (error) {
    console.log("no hay tareas");
  }
}

function saveTask() {
  // const dato = tasks.map((task) => `${task.task}|${task.completed}`).join("\n");
  const data = tasks.map((e1) => `${e1.task}|${e1.complete}`).join("\n");
  writeFileSync(DB_FILE, data, "utf-8");
  console.log("tarea descargada");
}

function addTask() {
  rl.question("Escribe la tarea: ", (task) => {
    tasks.push({ task, complete: false });
    console.log("Tarea agregada");
    saveTask();
    displayMenu();
    chooseOption();
  });
}

function listsTasks() {
  console.log("\n=== Tareas ===");
  if (tasks.length === 0) {
    console.log("no hay tareas");
  } else {
    tasks.forEach((element, index) => {
      let status = element.complete ? " ✅ " : " ✖️  ";
      console.log(index + 1 + status + element.task);
    });
  }
  displayMenu();
  chooseOption();
}

function completTask() {
  rl.question("Digita un numero: ", (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].complete = true;
      saveTask();
      console.log("tarea marcada ✅");
    } else {
      console.log("numero invalido");
    }
    displayMenu();
    chooseOption();
  });
}

function chooseOption() {
  rl.question("Elige una opcion... ", (choose1) => {
    switch (choose1) {
      case "1":
        addTask();
        break;
      case "2":
        listsTasks();
        break;
      case "3":
        completTask();
        break;
      case "4":
        console.log("adios");
        rl.close();
        break;
      default:
        console.log("invalid");
        displayMenu();
        chooseOption();
        break;
    }
  });
}

loadTasks();
displayMenu();
chooseOption();
