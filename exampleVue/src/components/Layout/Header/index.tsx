import { defineComponent } from "vue";
import styles from './index.module.scss'
/*
 * @Author: your name
 * @Date: 2021-06-24 21:54:33
 * @LastEditTime: 2021-06-24 22:48:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\components\Layout\Header\index.tsx
 */
export default defineComponent({
  name: "Header",
  setup() {
    return () => <div class={styles.headerWrap}>Header</div>;
  },
});
