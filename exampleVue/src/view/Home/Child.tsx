import { defineComponent } from "vue";
import styles from './Child.module.scss'
/*
 * @Author: your name
 * @Date: 2021-06-23 19:42:06
 * @LastEditTime: 2021-06-23 20:42:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\view\Home\Child.tsx
 */
export default defineComponent({
  props: {
    parentName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => <div class={styles.blue}>{props.parentName} Child</div>;
  },
});
