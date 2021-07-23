/*
 * @Author: your name
 * @Date: 2021-06-24 21:59:56
 * @LastEditTime: 2021-07-23 22:16:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\components\Layout\index.tsx
 */
import { defineComponent, ref } from "vue";
import Header, { MENU_STORE } from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Menu from "./Menu";
import styles from "./index.module.scss";
export default defineComponent({
  name: "Layout",
  setup() {
    return () => (
      <>
        <Menu></Menu>
        <div
          class={`${styles.layoutWrap} ${
            MENU_STORE.value ? styles.openMenuMargin : styles.closeMenuMargin
          }`}
        >
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
      </>
    );
  },
});
