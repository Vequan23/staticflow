const basePath = "../../";
const baseExtension = ".html";

const types = {
  basics: "basics",
  components: "components",
  pages: "pages",
};

const components = [
  {
    name: "card",
    type: types.components,
    path: "components/card/card",
  },
  {
    name: "header",
    type: types.components,
    path: "components/header/header",
  },
];

const basics = [
  {
    name: "button",
    type: types.basics,
    path: "basics/button/button",
  },
];

const pages = [];

export { components, basics, pages, basePath, baseExtension };
