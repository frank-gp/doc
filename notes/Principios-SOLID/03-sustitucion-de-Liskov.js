/* 
principio de sustitucion de Liskov
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

const loader = new Loader();

// programacion funcional
// programacion orientada a objetos
