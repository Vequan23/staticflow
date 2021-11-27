const { series, src, dest, watch } = require("gulp");
const del = require("del");
const postcss = require("gulp-postcss");
const mustache = require("gulp-mustache");
const inject = require("gulp-inject");
const webpack = require("webpack-stream");
const compiler = require("webpack");

const clean = () => {};
const cleanCss = () => del(["public/css"]);
const cleanJs = () => del(["public/js"]);
const cleanHTML = () => del(["public/*.html"]);
const cleanMustache = () => del(["public/*.mustache"]);
const css = () => src("src/css/**/*.css").pipe(postcss()).pipe(dest("./public/css"));

const javascript = () => {
  return src("src/js/**/*.js")
    .pipe(webpack(require("./webpack.config.js"), compiler, function () {}))
    .pipe(dest("./public/js"));
};

const html = () => src("./src/*.html").pipe(dest("./public"));

const handleMustache = () => {
  return src("./src/flows/**/*.mustache")
    .pipe(
      inject(src(["./src/flows/config/head.mustache"]), {
        starttag: "<!-- inject:head:mustache -->",
        transform: function (filePath, file) {
          return file.contents.toString("utf8");
        },
      })
    )
    .pipe(
      mustache("./src/flows/data.json", {
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
  watch("./src/flows/**/*.mustache", series(cleanMustache, handleMustache));
};

exports.css = css;
exports.js = javascript;
exports.clean = clean;
exports.build = build;
exports.watch = watchFiles;
exports.default = build;
