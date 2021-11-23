const { series, src, dest, watch } = require("gulp");
const del = require("del");
const postcss = require("gulp-postcss");
const mustache = require("gulp-mustache");

const clean = () => {};
const cleanCss = () => del(["public/css"]);
const cleanJs = () => del(["public/js"]);
const cleanHTML = () => del(["public/*.html"]);
const cleanMustache = () => del(["public/*.mustache"]);
const css = () => src("src/css/**/*.css").pipe(postcss()).pipe(dest("./public/css"));
const javascript = () => src("src/js/**/*.js").pipe(dest("./public/js"));
const html = () => src("./src/*.html").pipe(dest("./public"));

const handleMustache = () => {
  return src("./src/templates/**/*.mustache")
    .pipe(
      mustache("./src/templates/data.json", {
        extension: ".html",
      })
    )
    .pipe(dest("./public"));
};

const build = () => {
  console.log("Build");
};

const watchFiles = () => {
  watch("./src/css/**/*.css", series(cleanCss, css));
  watch("./src/js/**/*.js", series(cleanJs, javascript));
  watch("./src/*.html", series(cleanHTML, html));
  watch("./src/templates/**/*.mustache", series(cleanMustache, handleMustache));
};

exports.css = css;
exports.js = javascript;
exports.clean = clean;
exports.build = build;
exports.watch = watchFiles;
exports.default = build;
