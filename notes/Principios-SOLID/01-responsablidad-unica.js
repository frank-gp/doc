/* 
principio de responsablidad unica
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

(async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const request = new Request(url);
  const domPrinter = new DomPrinter(document.getElementById("content"));

  const data = await request.get();
  const text = data.reduce((acc, { title }) => acc + `<p>${title}</p>`, "");
  domPrinter.print(text);
})();
