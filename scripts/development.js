/*
 * @Author: your name
 * @Date: 2021-06-19 14:01:28
 * @LastEditTime: 2021-07-24 23:52:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\scripts\development.js
 */

const Webpack = require("webpack");

const { baseWebpackOptions, baseCssRules } = require("./baseOpts");
const WebpackDevServer = require("webpack-dev-server");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const { resolveRootPath } = require("./utils");
const { merge } = require("webpack-merge");

const serverOpts = {
  contentBase: resolveRootPath("dist"),
  hot: true,
  quiet: true,
  historyApiFallback: {
    rewrites:[
      { from: /^\/vue/, to: '/vue/index.html' },
    ]
  },
  clientLogLevel: "silent",
  port: 3000,
};

const webpackOpts = merge(baseWebpackOptions, {
  mode: "development",
  devtool: "source-map",
  ...baseCssRules(),
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["You application is running here http://localhost:3000"],
        notes: [
          "Some additional notes to be displayed upon successful compilation",
        ],
      },
      onErrors: function (severity, errors) {
        // You can listen to errors transformed and prioritized by the plugin
        // severity can be 'error' or 'warning'
      },
      // should the console be cleared between each compilation?
      // default is true
      clearConsole: true,

      // add formatters and transformers (see below)
      additionalFormatters: [],
      additionalTransformers: [],
    }),
  ],
});

const server = new WebpackDevServer(Webpack(webpackOpts), serverOpts);

server.listen(3000, "0.0.0.0", (e) => {
  if (e) {
    console.log(e);
  }
  console.log("Starting server on http://localhost:8080");
});
