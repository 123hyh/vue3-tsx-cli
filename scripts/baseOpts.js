/*
 * @Author: your name
 * @Date: 2021-06-19 12:54:51
 * @LastEditTime: 2021-06-23 22:57:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\scripts\baseOpts.js
 */
/*
 * @Author: your name
 * @Date: 2021-06-19 12:54:51
 * @LastEditTime: 2021-06-19 19:13:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\scripts\baseOpts.js
 */
const { resolveRootPath, getLastStyleLoader } = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPluginLoader = MiniCssExtractPlugin.loader;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const baseVue3Opts = require("./baseVue3Opts");
const { merge } = require("webpack-merge");
/**
 * 基础 webpack 配置
 */
module.exports.baseWebpackOptions = merge(
  {
    entry: {
      main: "./src/main.ts",
    },
    output: {
      filename: "scripts/[name]/index.[chunkhash].bundle.js",
      chunkFilename: "scripts/[name]/index.[chunkhash].chunk.js",
      path: resolveRootPath("dist"),
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset",
          generator: {
            filename: "assets/images/[name].[contenthash][ext][query]",
          },
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024 // 4kb
            }
          }
        },
        {
          test: /.jsx?$/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.tsx?$/,
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
      new HtmlWebpackPlugin({
        title: "Hot Module Replacement",
        template: resolveRootPath("./index.html"),
      }),
    ],
  },
  baseVue3Opts
);
/**
 *  样式 基础 loader
 * @description:
 * @param {*} mode
 * @return {*}
 */
module.exports.baseCssRules = (webpackMode = "development") => {
  const isProd = webpackMode === "production";
  const BASE_CSS_LOADERS = [
    getLastStyleLoader(webpackMode, MiniCssExtractPluginLoader),
    "css-loader",
    "postcss-loader",
  ];
  return {
    module: {
      rules: [
        // css module 模式
        {
          test: new RegExp(`^(?=.*\\.module).*\\.css`),
          use: [
            {
              loader: getLastStyleLoader(
                webpackMode,
                MiniCssExtractPluginLoader
              ),
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[hash:base64:6]",
              },
            },
          ],
        },
        // 普通 css 模式
        {
          test: new RegExp(`^(?!.*\\.module).*\\.css`),
          use: BASE_CSS_LOADERS,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [...BASE_CSS_LOADERS, "sass-loader"],
        },
        {
          test: /\.less$/i,
          use: [...BASE_CSS_LOADERS, "less-loader"],
        },
      ],
    },
    plugins: isProd
      ? [
          new MiniCssExtractPlugin({
            filename: "styles/[name]/index.[contenthash].bundle.css",
            // chunkFilename: "styles/[name]/index.[contenthash].chunk.css",
          }),
        ]
      : [],
    optimization: {
      splitChunks: {
        cacheGroups: {
          //打包公共模块
          commons: {
            chunks: "initial", //initial表示提取入口文件的公共部分
            minChunks: 2, //表示提取公共部分最少的文件数
            minSize: 0, //表示提取公共部分最小的大小
            name: "commons", //提取出来的文件命名
          },
        },
      },
      minimize: isProd,
      minimizer: isProd
        ? [
            /* 压缩 css */
            new CssMinimizerPlugin(),
            /*压缩 js */
            new TerserPlugin(),
          ]
        : [],
    },
  };
};
