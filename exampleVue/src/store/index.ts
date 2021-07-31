import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import user from "./modules/user";
import useStoreHooks from "./hook";

/*
 * @Author: your name
 * @Date: 2021-07-31 17:43:38
 * @LastEditTime: 2021-07-31 20:59:03
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
export const storeBeforeHook = useStoreHooks(store);
