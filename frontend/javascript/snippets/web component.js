
let html = `web component`;
let css = `:host{color: tomato;}`;

class WebComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = html + css;
  }
}
customElements.define("web-component", WebComponent);
    