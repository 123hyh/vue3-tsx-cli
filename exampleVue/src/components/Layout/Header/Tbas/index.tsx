import { defineComponent, reactive, ref } from "vue";
import { Tabs } from "ant-design-vue";
/*
 * @Author: your name
 * @Date: 2021-07-23 23:43:01
 * @LastEditTime: 2021-07-24 00:08:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\components\Layout\Header\Tbas\index.tsx
 */
export default defineComponent({
  name: "ATabs",
  setup() {
    const activeKey = ref<string>("tab1");
    const list = reactive([
      {
        route: "tab1",
        label: "tab1",
      },
      {
        route: "tab2",
        label: "tab2",
      },
      {
        route: "tab3",
        label: "tab3",
      },
    ]);
    return (
      <>
      <Tabs type="editable-card" v-model={[activeKey.value, ["activeKey"]]}>
        {list.map((item) => (
          <Tabs.TabPane
            key={item.route}
            data-route={item.route}
            tab={item.label}
          ></Tabs.TabPane>
        ))}
      </Tabs>
      </>
    );
  },
});
