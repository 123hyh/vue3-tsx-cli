/*
 * @Author: your name
 * @Date: 2021-06-20 16:43:12
 * @LastEditTime: 2021-07-31 21:09:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\router\index.ts
 */

import { storeBeforeHook } from "../store";
import { createRouter, createWebHistory } from "vue-router";
import asyncRoutes from "./asyncRoutes";
const router = createRouter({
  history: createWebHistory(
    process.env.NODE_ENV === "development" ? "/vue" : "/"
  ),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import(/* webpackChunkName: 'login' */ "../view/Login"),
    },
  ],
});
export default router;

router.beforeEach(storeBeforeHook);
/**
 * 添加路由
 */
export function addRouteAsyncRoutes() {
  router.addRoute(asyncRoutes);
}
