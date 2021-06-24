import { defineComponent } from "vue";
import styles from "./App.module.scss";
/*
 * @Author: your name
 * @Date: 2021-06-20 15:45:13
 * @LastEditTime: 2021-06-24 22:29:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\App.tsx
 */
export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <>
        <router-view></router-view>
      </>
    );
  },
});
