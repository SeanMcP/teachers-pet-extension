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

      const size = this.getAttribute("size") || "medium";
      const [hostDimensions, svgDimensions] = this.getDimensions(size);

      const style = document.createElement("style");
      style.textContent = `
                :host {
                    ${hostDimensions}
                    align-items: center;
                    display: inline-flex;
                    justify-content: center;
                }
                svg {
                    ${svgDimensions}
                }
            `;

      shadowRoot.append(style);
    }

    getDimensions = (size) => {
      switch (size) {
        case "medium":
          return ["height: 44px; width: 44px;", "height: 24px; width: 24px;"];
        case "small":
          return ["height: 22px; width: 22px;", "height: 16px; width: 16px;"];
      }
    };

    getSVG() {
      switch (this.getAttribute("name")) {
        case "arrow-clockwise":
          return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"></path></svg>`;
        case "chevron-left":
          return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
        case "pause":
          return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"></path></svg>`;
        case "play":
          return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path></svg>`;
        case "trash":
          return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>`;
        case "x":
          return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>`;
        default:
          return "";
      }
    }
  }
);
