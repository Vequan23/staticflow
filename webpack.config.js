const path = require("path");
const basePath = "./src/js/";

module.exports = {
  mode: "production",
  entry: {
    main: `${basePath}main.js`,
    card: `${basePath}components/card.js`,
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "public/js"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
