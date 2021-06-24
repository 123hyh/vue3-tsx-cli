import { defineComponent } from "vue";
import Child from "../Home/Child";
/*
 * @Author: your name
 * @Date: 2021-06-20 16:49:46
 * @LastEditTime: 2021-06-23 19:57:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\view\About\index.tsx
 */
export default defineComponent(() => () => <div>About/index.tsx<Child parentName="About"></Child></div>);
