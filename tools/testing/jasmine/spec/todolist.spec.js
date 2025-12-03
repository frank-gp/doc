const ToDoList = require("../todolist.js");

describe("La clase ToDoList", () => {
  it("Debe ser una clase", () => {
    expect(typeof ToDoList.prototype.constructor).toBe("function");
  });

  it("check method getTodos", () => {
    const newToDoList = new ToDoList();
    expect(newToDoList.getTodos).toBeDefined();
  });

  it("check method addTodo", () => {
    const newToDoList = new ToDoList();
    expect(newToDoList.addTodo).toBeDefined();
  });

  it("check method deleteTodo", () => {
    const newToDoList = new ToDoList();
    expect(newToDoList.deleteTodo).toBeDefined();
  });

  it("getTodos return array", () => {
    const newToDoList = new ToDoList();
    expect(Array.isArray(newToDoList.getTodos())).toBeTrue();
  });

  it("addTodo", () => {
    const newToDoList = new ToDoList();
    newToDoList.addTodo("text demo");
    // expect(newToDoList.getTodos()).toEqual(["text demo"]);
    expect(newToDoList.getTodos()).toContain("text demo");
  });

  it("deleteTodo", () => {
    const newToDoList = new ToDoList();
    newToDoList.addTodo("text demo A");
    newToDoList.addTodo("text demo B");
    newToDoList.addTodo("text demo C");
    newToDoList.deleteTodo("text demo C");
    expect(newToDoList.getTodos()).toContain("text demo A");
    expect(newToDoList.getTodos()).toContain("text demo B");
    expect(newToDoList.getTodos()).not.toContain("text demo C");
  });
});
