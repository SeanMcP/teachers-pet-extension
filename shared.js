customElements.define(
  "ui-navbar",
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });

      let innerHTML = "";

      if (location.pathname !== "/index.html") {
        innerHTML += `<a href="/index.html"><ui-icon name=chevron-left></ui-icon></a>`;
      }

      innerHTML += `<b>${document.title}</b>`;

      shadowRoot.innerHTML = `<header>${innerHTML}</header>`;

      const style = document.createElement("style");
      style.textContent = `
            :host {
                border-bottom: 1px solid var(--slightly-dark);
            }
            header {
                align-items: center;
                display: grid;
                grid-template-columns: 44px 1fr 44px;
                gap: 1rem;
            }
            b {
                grid-column: 2;
                text-align: center;
                padding-block: 1rem;
            }
        `;

      shadowRoot.append(style);
    }
  }
);

customElements.define(
  "ui-icon",
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });

      shadowRoot.innerHTML = this.getSVG();

      const style = document.createElement("style");
      style.textContent = `
                :host {
                    align-items: center;
                    display: inline-flex;
                    height: 44px;
                    justify-content: center;
                    width: 44px;
                }
                svg {
                    height: 24px;
                    width: 24px;
                }
            `;

      shadowRoot.append(style);
    }

    getSVG() {
      switch (this.getAttribute("name")) {
        case "chevron-left":
          return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
        default:
          return "";
      }
    }
  }
);
