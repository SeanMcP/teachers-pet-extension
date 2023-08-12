customElements.define(
  "ui-navbar",
  class extends HTMLElement {
    constructor() {
      super();

      let innerHTML = "";

      if (location.pathname !== "/index.html") {
        innerHTML += `<a href="/index.html">Back</a>`;
      }

      innerHTML += `<b>${this.getAttribute("title") || "Teacher's Pet"}</b>`;

      this.innerHTML = `<header>${innerHTML}</header>`;
    }
  }
);
