/* 
principio de inversion de la dependencia
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
    this.element.innerHTML = "No hay contenido";
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
  constructor(request, domPrinter) {
    this.request = request;
    this.domPrinter = domPrinter;
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
  constructor(color, bold, border) {
    this.color = color;
    this.bold = bold;
    this.border = border;
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

const url = "https://jsonplaceholder.typicode.com/posts";
const request = new Request(url);
const domPrinter = new DomFormatterPrinter(document.getElementById("content"));

const loader = new Loader(request, domPrinter);
const titleStyle = new TitleStyle(new Color(), new Bold(), new Border());
// programacion funcional
// programacion orientada a objetos
