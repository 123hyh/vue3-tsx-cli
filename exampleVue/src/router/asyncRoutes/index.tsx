import { RouteRecordRaw } from "vue-router";

/*
 * @Author: your name
 * @Date: 2021-07-31 18:44:33
 * @LastEditTime: 2021-07-31 19:01:40
 * @LastEditors: Please set LastEditors
 * @Description: 动态路由
 * @FilePath: \webpack-vscode\exampleVue\src\router\asyncRoutes\index.tsx
 */
const asyncRoutes: RouteRecordRaw = {
  path: "/",
  name: "index",
  component: () =>
    import(/* webpackChunkName: 'layout' */ "../../components/Layout"),
  children: [
    {
      path: "",
      name: "Home",
      meta: {
        title: "首页",
      },
      component: () => import(/* webpackChunkName: 'home' */ "../../view/Home"),
    },
    {
      path: "about",
      name: "about",
      meta: {
        title: "关于我们",
      },
      component: () =>
        import(/* webpackChunkName: 'about' */ "../../view/About"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () =>
        import(/* webpackChunkName: 'not_found' */ "../../view/NotFind"),
    },
  ],
};

export default asyncRoutes;
