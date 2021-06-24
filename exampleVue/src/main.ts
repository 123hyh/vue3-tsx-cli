/*
 * @Author: your name
 * @Date: 2021-06-20 15:42:25
 * @LastEditTime: 2021-06-23 23:09:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\main.ts
 */
import { createApp } from "vue";
import router from "./router";
import App from "./App";
import './styles/index.globle.scss'
createApp(App).use(router).mount("#app");
