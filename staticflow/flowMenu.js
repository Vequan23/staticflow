import { components, basics, pages, basePath, baseExtension } from "./flows.js";

const flowMenu = () => {
  const init = () => {
    createMenu();
  };

  const createMenu = () => {
    const HTML = `
      <div class="c-flow-menu">
        <div class="c-menu__item-container">
          <p>Basics</p>
          <div class="c-menu__item-link-container">
              ${createFlowMenuItems(basics)}
          </div>
        </div>
        <div class="c-menu__item-container">
          <p>Components</p>
          <div class="c-menu__item-link-container">
            ${createFlowMenuItems(components)}
          </div>
        </div>
        <div class="c-menu__item-container">
          <p>Pages</p>
          <div class="c-menu__item-link-container">
            ${createFlowMenuItems(pages)}
          </div>
        </div>
      </div>
    `;
    injectMenu(HTML);
  };

  const createFlowMenuItems = (items) => {
    let HTML = "";

    items.map(({ name, type, path }) => {
      HTML += `<a href="${basePath}${path}${baseExtension}" class=c-flow-menu__link>${name}</a>`;
    });

    return HTML;
  };

  const injectMenu = (HTML) => {
    document.body.insertAdjacentHTML("afterbegin", HTML);
  };

  init();
};

export default flowMenu;
