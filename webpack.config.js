const path = require("path");

// cleans the output directory before each build
const CleanWebpackPlugin = require("clean-webpack-plugin");

// this dir should contain the entry point HTML and other static files
const contentBaseDir = "./src";

// where the built files should be
const outputDirName = "dist";

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, outputDirName),
    filename: "app.bundle.js",
  },
  // source map type
  devtool: "cheap-eval-source-map",
  devServer: {
    contentBase: contentBaseDir,
    // reload page when changing files in contentBase
    // does not interfere with HMR
    watchContentBase: true,
    // should also enable hot and inline, but they
    // don't always work when enabled thru config files
    // hot: hot module replacement
    // inline: refresh page on changes that can't be hot replaced
  },
  module: {
    rules: [
      {
        // enable importing CSS in JS
        // to use hot reloading for CSS, must import it in JS
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([outputDirName]),
  ],
};

// npm i -D clean-webpack-plugin css-loader style-loader
