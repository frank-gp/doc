class ToDoList {
  constructor() {
    this.data = [];
  }

  getTodos() {
    return this.data;
  }

  addTodo(parameter) {
    this.data.push(parameter);
  }

  deleteTodo(parameter) {
    const newArray = this.data.filter((value) => value !== parameter);
    this.data = newArray;
  }
}

const newToDoList = new ToDoList();

console.log(newToDoList.getTodos());

newToDoList.addTodo("new todo 1");
newToDoList.addTodo("new todo 2");
console.log(newToDoList.getTodos());

newToDoList.deleteTodo("new todo 1");
console.log(newToDoList.getTodos());

module.exports = ToDoList;
