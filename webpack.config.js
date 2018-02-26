/**
 * Script to build: NODE_ENV=production webpack
 * Script to dev: webpack-dev-server --open --hot --inline
*/

const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const production = process.env.NODE_ENV === "production";

// file names of bundles
const jsBundleName = "app.bundle.js";
const cssBundleName = "style.bundle.css";

// this dir should contain the entry point HTML and other static files
const contentBaseDir = "./src";

// where the built files should be
const outputDirName = "./dist";

// file names of all HTML files in src
const htmlFile = "index.html";

// common config options for both dev and prod
let config = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, outputDirName),
    filename: jsBundleName,
  },
};

if (production) {
  config = merge(config, {
    // source map type
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
              loader: "css-loader",
            }, {
              loader: "sass-loader",
            }],
          }),
        },
      ],
    },
    plugins: [
      // clean up dist dir
      new CleanWebpackPlugin([outputDirName]),
      // output CSS bundle
      new ExtractTextPlugin(cssBundleName),
      new HtmlWebpackPlugin({
        filename: htmlFile,
        template: path.resolve(__dirname, `${contentBaseDir}/${htmlFile}`),
      }),
    ],
  });
} else {
  config = merge(config, {
    // source map type
    devtool: "cheap-eval-source-map",
    devServer: {
      port: 3000,
      contentBase: contentBaseDir,
      // reload page when changing files in contentBase
      // does not interfere with HMR
      watchContentBase: true,
      // will fall back to index.html when no matching routes exist
      historyApiFallback: true,
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
          test: /\.scss$/,
          use: [{
            loader: "style-loader", // creates style nodes from JS strings
          }, {
            loader: "css-loader", // translates CSS into CommonJS
          }, {
            loader: "sass-loader", // compiles Sass to CSS
          }],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: htmlFile,
        template: path.resolve(__dirname, `${contentBaseDir}/${htmlFile}`),
      }),
    ],
  });
}

module.exports = config;

// npm i -D css-loader style-loader extract-text-plugin copy-webpack-plugin html-webpack-plugin
// npm i -D clean-webpack-plugin webpack-merge
