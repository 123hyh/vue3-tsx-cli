/*
 * @Author: your name
 * @Date: 2021-06-20 16:43:12
 * @LastEditTime: 2021-06-23 19:57:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\router\index.ts
 */
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import(  /* webpackChunkName: 'home' */ "../view/Home"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: 'about' */ "../view/About"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import(/* webpackChunkName: 'not_found' */"../view/NotFind"),
    },
  ],
});
