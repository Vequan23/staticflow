const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/main.js",
    card: "./src/js/components/card.js",
  },
  output: {
    filename: "[name].js",
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
