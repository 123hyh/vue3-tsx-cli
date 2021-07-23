import { defineComponent, ref, onUpdated, onMounted } from "vue";
import styles from "./index.module.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import ATbas from "./Tbas";
/*
 * @Author: your name
 * @Date: 2021-06-24 21:54:33
 * @LastEditTime: 2021-07-24 00:08:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\components\Layout\Header\index.tsx
 */
export const MENU_STORE = ref(false);
export default defineComponent({
  name: "Header",
  setup() {
    const elem = ref<Element>();
    let fixedWidth = ref<string>("");

    const getWidth = () => {
      setTimeout(() => {
        fixedWidth.value = window.getComputedStyle(elem.value as Element).width;
      }, 20);
    };
    onMounted(getWidth);
    onUpdated(getWidth);
    return () => (
      <div ref={elem} class={styles.headerWrap}>
        <div class={styles.fixedWrap} style={`width: ${fixedWidth.value};`}>
          <div style="font-size: 1.5rem">
            <div onClick={() => (MENU_STORE.value = !MENU_STORE.value)}>
              {MENU_STORE.value ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </div>
          </div>
          <ATbas></ATbas>
        </div>
      </div>
    );
  },
});
