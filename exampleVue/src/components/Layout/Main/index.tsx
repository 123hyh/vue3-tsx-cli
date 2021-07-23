import { defineComponent } from "vue";

/*
 * @Author: your name
 * @Date: 2021-06-24 21:57:48
 * @LastEditTime: 2021-07-23 22:19:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\components\Main\index.tsx
 */
export default defineComponent({
  name: "Main",
  setup() {
    return () => (
      <>
        <router-view data-router-view="main"></router-view>
      </>
    );
  },
});
