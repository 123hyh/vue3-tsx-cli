import { defineComponent } from "vue";
import styles from "./index.module.scss";
/*
 * @Author: your name
 * @Date: 2021-06-24 22:19:02
 * @LastEditTime: 2021-06-24 23:42:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\components\Layout\Menu\index.tsx
 */
export default defineComponent({
  name: "Menu",
  props: {
    menuOpend: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div
        class={`${styles.menu} ${
          props.menuOpend ? styles.openMenu : styles.closeMenu
        }`}
      >
        <div class={styles.firstMenu}>Menu</div>
      </div>
    );
  },
});
