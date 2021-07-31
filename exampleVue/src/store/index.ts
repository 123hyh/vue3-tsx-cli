import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import user from "./modules/user";
import useStoreHooks from "./hook";

/*
 * @Author: your name
 * @Date: 2021-07-31 17:43:38
 * @LastEditTime: 2021-07-31 21:22:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\store\index.ts
 */
export const STORE_KEY: InjectionKey<Store<typeof user>> = Symbol();
const store = createStore({
  modules: {
    user,
  },
});
export default store;

/**
 * store 钩子 判断首次是否登录
 */
export const storeBeforeHook = useStoreHooks(store);
