import { isEmpty } from "lodash-es";
import { NavigationGuardWithThis } from "vue-router";
import { Store } from "vuex";
import { addRouteAsyncRoutes } from "../router";

/*
 * @Author: your name
 * @Date: 2021-07-31 19:03:42
 * @LastEditTime: 2021-07-31 21:21:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\store\hook.ts
 */
export default function useStoreHooks(
  store: Store<any>
): NavigationGuardWithThis<undefined> {
  let isPull = false;
  window.onbeforeunload = function () {
    window.sessionStorage.setItem("store", JSON.stringify(store.state));
  };
  /**
   * 判断是否有登录
   */
  return function storeBeforeHook(to, from, next) {
    if (isPull) return next();
    const data = window.sessionStorage.getItem("store");
    if (!isEmpty(data)) {
      const d = JSON.parse(data as string);
      store.replaceState(d);
      isPull = true;
      return store.dispatch("user/getUserInfo").then((isLogin) => {
        if (isLogin) {
          addRouteAsyncRoutes();
          return next("/");
        }
      })
    }
    next();
  };
}
