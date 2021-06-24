/*
 * @Author: your name
 * @Date: 2021-06-24 19:49:26
 * @LastEditTime: 2021-06-24 21:33:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\scripts\.env\index.js
 */
const { FRAME_TYPE, ACTIVE_PROFILES } = process.env;
let application = require("./application.json");

if (ACTIVE_PROFILES) {
  const opts = require(`./application.${(
    ACTIVE_PROFILES + ""
  ).toLocaleLowerCase()}.json`);
  application = { ...application, ...opts };
}
module.exports = Object.freeze({
  /**
   * 框架类型 vue | react
   */
  frameType: (FRAME_TYPE || "").trim().toLocaleLowerCase(),
  ...application,
});
