/*
 * @Author: your name
 * @Date: 2021-06-20 16:43:12
 * @LastEditTime: 2021-06-24 22:55:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: () =>
        import(/* webpackChunkName: 'layout' */ "../components/Layout"),
      children: [
        {
          path:'',
          name:'Home',
          component: ()  => import(/* webpackChunkName: 'home' */'../view/Home')
        },
        {
          path: "about",
          name: "about",
          component: () =>
            import(/* webpackChunkName: 'about' */ "../view/About"),
        },
        {
          path: "/:pathMatch(.*)*",
          name: "NotFound",
          component: () =>
            import(/* webpackChunkName: 'not_found' */ "../view/NotFind"),
        },
      ],
    },
  ],
});
