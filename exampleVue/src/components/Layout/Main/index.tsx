import { defineComponent } from "vue";

/*
 * @Author: your name
 * @Date: 2021-06-24 21:57:48
 * @LastEditTime: 2021-06-24 22:30:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\components\Main\index.tsx
 */
export default defineComponent({
  name: "Main",
  setup() {
    return () => (
      <>
        <router-view></router-view>
      </>
    );
  },
});
