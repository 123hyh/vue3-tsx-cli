/*
 * @Author: your name
 * @Date: 2021-06-20 15:42:25
 * @LastEditTime: 2021-06-24 23:45:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\main.ts
 */
import { createApp } from "vue";
import router from "./router";
import App from "./App";
import "./styles/index.globle.scss";
console.log(
  " %c ".concat("Vue3", "  %c TSX hot "),
  "color: #fadfa3; background: #030307; padding:5px 0;",
  "background: #fadfa3; padding:5px 0;"
);
createApp(App).use(router).mount("#app");
