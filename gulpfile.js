const { series, src, dest, watch } = require("gulp");
const del = require("del");
const postcss = require("gulp-postcss");
const mustache = require("gulp-mustache");
const inject = require("gulp-inject");

const clean = () => {};
const cleanCss = () => del(["public/css"]);
const cleanJs = () => del(["public/js"]);
const cleanHTML = () => del(["public/*.html"]);
const cleanMustache = () => del(["public/*.mustache"]);
const css = () => src("css/**/*.css").pipe(postcss()).pipe(dest("./public/css"));
const javascript = () => src("js/**/*.js").pipe(dest("./public/js"));
const html = () => src("./*.html").pipe(dest("./public"));

const handleMustache = () => {
  const sources = src(["./js/main.js", "./css/main.css"], { read: false });

  return src("templates/**/*.mustache")
    .pipe(
      mustache(
        {},
        {
          extension: ".html",
        }
      )
    )
    .pipe(inject(sources))
    .pipe(dest("./public"));
};

const build = () => {
  console.log("Build");
};

const watchFiles = () => {
  watch("./css/**/*.css", series(cleanCss, css));
  watch("./js/**/*.js", series(cleanJs, javascript));
  watch("./*.html", series(cleanHTML, html));
  watch("./templates/**/*.mustache", series(cleanMustache, handleMustache));
};

exports.css = css;
exports.js = javascript;
exports.clean = clean;
exports.build = build;
exports.watch = watchFiles;
exports.default = build;
