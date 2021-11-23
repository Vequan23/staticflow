import { flows, basePath, baseExtension } from "./flows.js";

const flowMenu = () => {
  const init = () => {
    createMenu();
  };

  const createMenu = () => {
    const HTML = `
      <div class="staticflow-c-flow-menu">
        ${createFlows()}
      </div>
    `;
    injectMenu(HTML);
  };

  const createFlows = () => {
    let HTML = "";

    flows.map(({ name, type, path }) => {
      HTML += `<a href="${basePath}${path}${baseExtension}"  style="${createStyles()}" class=staticflow-c-flow-menu__link>${name}</a>`;
    });

    return HTML;
  };

  const injectMenu = (HTML) => {
    document.body.insertAdjacentHTML("afterbegin", HTML);
  };

  const createStyles = () => {
    return `display: block; 
            margin: .5rem 0;
            font-size: .95rem;
            font-weight: 600;
            color: black;
            text-decoration: none;
            text-transform: uppercase
            `;
  };

  init();
};

export default flowMenu;
