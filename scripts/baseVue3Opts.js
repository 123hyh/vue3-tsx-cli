/*
 * @Author: your name
 * @Date: 2021-06-20 15:31:50
 * @LastEditTime: 2021-06-24 22:51:01
 * @LastEditors: Please set LastEditors
 * @Description: vue3 配置
 * @FilePath: \webpack-vscode\scripts\baseVue3Opts.js
 */
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolveRootPath } = require("./utils");
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  entry: {
    vue_bundle: resolveRootPath("./exampleVue/src/main.ts"),
  },
  resolve: {
    extensions: [".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx$/,
        use: [
          "babel-loader",
          {
            loader: "vue-tsx-hot-loader",
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolveLoader: {
    alias: {
      "vue-tsx-hot-loader": require.resolve("./loader/vue3HotLoader.js"),
    },
  },
  plugins: [
    isProd === false &&
      new HtmlWebpackPlugin({
        title: "Hot Module Replacement Vue",
        template: resolveRootPath("./index.html"),
        filename: "vue/index.html",
        chunks: ["vue_bundle"],
      }),
    new VueLoaderPlugin(),
  ].filter(Boolean),
};
