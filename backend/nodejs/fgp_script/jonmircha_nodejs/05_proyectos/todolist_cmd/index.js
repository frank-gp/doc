import { createInterface } from "readline";

const tasks = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log("===  To do list  ===");
  console.log("1. add task");
  console.log("2. check task");
  console.log("3. complete task");
  console.log("4. exit");
  console.log("\n");
}

function addTask() {
  rl.question("Escribe la tarea: \n", (task) => {
    tasks.push({ task, complete: false });
    console.log("Tarea agregada");
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

displayMenu();
chooseOption();
