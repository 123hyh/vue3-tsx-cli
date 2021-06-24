import { defineComponent } from "vue";
import { useRouter } from "vue-router";

/*
 * @Author: your name
 * @Date: 2021-06-20 16:44:48
 * @LastEditTime: 2021-06-23 19:50:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\view\Home\index.js
 */
import Child from "./Child";
export default defineComponent({
  name:'Home',
  setup() {
    const { push } = useRouter();
    return () => (
      <div>
        <h1>Home</h1>
        <button onClick={() => push("/about")}>link About1</button>
        <Child parentName='Home'></Child>
      </div>
    );
  },
});
