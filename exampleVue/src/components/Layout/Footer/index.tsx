import { defineComponent, onMounted, onUpdated, ref } from "vue";
import styles from "./index.module.scss";

/*
 * @Author: your name
 * @Date: 2021-06-24 21:56:50
 * @LastEditTime: 2021-07-23 23:17:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\components\Layout\Footer\index.tsx
 */
export default defineComponent({
  name: "Footer",
  setup() {
    const elem = ref<Element>();
    let fixedWidth = ref<string>("");

    const getWidth = () => {
      fixedWidth.value = window.getComputedStyle(elem.value as Element).width;
    };
    onMounted(getWidth);
    onUpdated(getWidth);
    return () => (
      <div class={styles.footer} ref={elem}>
        <div
          class={styles.fixedFooterWrap}
          style={`width: ${fixedWidth.value};`}
        >
          Footer
        </div>
      </div>
    );
  },
});
