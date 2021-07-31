/*
 * @Author: your name
 * @Date: 2021-07-31 17:45:32
 * @LastEditTime: 2021-07-31 21:19:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\store\modules\user.ts
 */
import { forIn } from "lodash-es";
import { Module, Store } from "vuex";
import { addRouteAsyncRoutes } from "../../router";
interface UserStore {
  token: string;
}
const user: Module<UserStore, unknown> = {
  namespaced: true,
  state: {
    token: "",
  },
  mutations: {
    updateState(state, payload: UserStore) {
      state.token = payload?.token;
    },
  },
  actions: {
    /**
     * 登录
     */
    async login({ commit }, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const d = { token: "xx12" };
          commit("updateState", d);
          addRouteAsyncRoutes();
          return resolve(d);
        }, 2000);
      });
    },
    /**
     * 获取用户信息
     * @param param0
     */
    async getUserInfo({ state, commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 500);
      });
    },
  },
};

export default user;
