/*
 * @Author: your name
 * @Date: 2021-06-19 12:57:15
 * @LastEditTime: 2021-06-19 15:25:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\scripts\utils.js
 */

const path = require("path");

/**
 * resolve path
 * @description:
 * @param {*} dir
 * @return {*}
 */
module.exports.resolveRootPath = (dir) => path.resolve(process.cwd(), dir);

/**
 * development 配置
 */
module.exports.setupDevelopment = () => {
    debugger;
};

/**
 * 获取最后处理样式的 loader
 * @param webpackMode
 * @param loader
 * @returns {string|*}
 */
module.exports.getLastStyleLoader = (webpackMode, loader) => webpackMode === 'development' ? 'style-loader' : loader