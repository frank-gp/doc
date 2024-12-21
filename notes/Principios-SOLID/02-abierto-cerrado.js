/* 
principio de abierto/cerrado
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
}

(async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const request = new Request(url);
  // const domPrinter = new DomFormatterPrinter(document.getElementById("content"));
  const domHTMLPrinter = new DomHTMLPrinter(document.getElementById("content"), (acc, { title, body }) => {
    return (
      acc +
      `<h4>${title}</h4>
    <p>${body}</p>
    `
    );
  });

  const data = await request.get();
  domHTMLPrinter.print(data);
})();
