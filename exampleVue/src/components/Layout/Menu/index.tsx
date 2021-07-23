import { defineComponent } from "vue";
import { MENU_STORE } from "../Header";
import styles from "./index.module.scss";
/*
 * @Author: your name
 * @Date: 2021-06-24 22:19:02
 * @LastEditTime: 2021-07-23 22:16:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\components\Layout\Menu\index.tsx
 */
export default defineComponent({
  name: "Menu",
  setup() {
    return () => (
      <div
      data-opend={MENU_STORE.value}
        class={`${styles.menu} ${
          MENU_STORE.value ? styles.openMenu : styles.closeMenu
        }`}
      >
        <div class={styles.firstMenu}>Menu</div>
      </div>
    );
  },
});
