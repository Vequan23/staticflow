const basePath = "../";
const baseExtension = ".html";

const types = {
  basics: "basics",
  components: "components",
  pages: "pages",
};

const flows = [
  {
    name: "card",
    type: types.components,
    path: `card/card`,
  },
  {
    name: "header",
    type: types.components,
    path: `header/header`,
  },
];

export { flows, basePath, baseExtension };
