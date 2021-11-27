const moduleInjector = () => {
  const basePath = "../../js/";
  const elsWithModule = document.querySelectorAll("[data-module]");
  const elsWithModuleArray = Array.from(elsWithModule);
  const fileSuffix = ".js";

  const init = () => {
    elsWithModuleArray.forEach((element) => {
      if (element) {
        const moduleName = element.dataset.module;
        const script = document.createElement("script");
        script.type = "module";
        script.src = `${basePath}${moduleName}${fileSuffix}`;
        script.async = true;
        script.dataset.cfasync = "false";
        document.body.appendChild(script);
      }
    });
  };
  init();
};

export default moduleInjector;
