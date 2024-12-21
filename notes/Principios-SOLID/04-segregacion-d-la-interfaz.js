/* 
principio de segregacion de la interfaz
 */

class Request {
  constructor(url) {
    this.url = url;
  }

  async get() {
    const response = await fetch(this.url);
    const json = await response.json();
    return json;
  }
}

class DomPrinter {
  constructor(element) {
    this.element = element;
  }

  print(data) {
    this.element.innerHTML = data;
  }

  clear() {
    this.element.innerHTML = "";
  }
}

class DomFormatterPrinter extends DomPrinter {
  constructor(element) {
    super(element);
  }

  // format(data) {
  //   return data.reduce((acc, { title }) => acc + `<p>${title}</p>`, "");
  // }

  print(data) {
    const text = data.reduce((acc, { title }) => acc + `<p>${title}</p>`, "");
    super.print(text);
  }
}

class DomHTMLPrinter extends DomPrinter {
  constructor(element, formatter) {
    super(element);
    this.formatter = formatter;
  }

  print(data) {
    const text = data.reduce(this.formatter, "");
    super.print(text);
  }

  clear() {
    return;
  }
}

class Loader {
  constructor() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    this.request = new Request(url);
    this.domPrinter = new DomFormatterPrinter(document.getElementById("content"));
    // this.domPrinter = new DomHTMLPrinter(document.getElementById("content"), (acc, { title, body }) => {
    //   return (
    //     acc +
    //     `<h4>${title}</h4>
    //   <p>${body}</p>
    //   `
    //   );
    // });
  }

  async load() {
    const data = await this.request.get();
    this.domPrinter.print(data);
  }

  clear() {
    this.domPrinter.clear();
  }
}

class Color {
  changeColor(color, element) {
    element.style.color = color;
  }
}

class Bold {
  changeBold(element) {
    element.style.fontWeight = "bold";
  }
}

class Border {
  changeBorder(element) {
    element.style.border = "1px solid black";
  }
}

class TitleStyle {
  constructor() {
    this.color = new Color();
    this.bold = new Bold();
    this.border = new Border();
  }

  changeColor(color, element) {
    this.color.changeColor(color, element);
  }

  changeBold(element) {
    this.bold.changeBold(element);
  }

  changeBorder(element) {
    this.border.changeBorder(element);
  }
}

const loader = new Loader();
const titleStyle = new TitleStyle();
// programacion funcional
// programacion orientada a objetos
