import { defineComponent, reactive, ref } from "vue";
import { Tabs } from "ant-design-vue";
import { useRouter, onBeforeRouteUpdate, useRoute } from "vue-router";
/*
 * @Author: your name
 * @Date: 2021-07-23 23:43:01
 * @LastEditTime: 2021-07-31 21:04:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\components\Layout\Header\Tbas\index.tsx
 */
export default defineComponent({
  name: "ATabs",
  setup() {
    const currentRoute = useRoute();
    const activeKey = ref<string>(
      (currentRoute.name as string).toUpperCase() === "NOTFOUND"
        ? ""
        : currentRoute.path
    );
    const { push } = useRouter();
    const list = reactive([
      {
        route: currentRoute.path,
        label: currentRoute.matched[currentRoute.matched.length - 1].meta.title,
      },
    ]);
    function removeTab(
      removeRoute: string | MouseEvent,
      action: "add" | "remove"
    ) {
      if (action === "remove") {
        list.forEach(({ route }, i) => {
          if (route === removeRoute) {
            list.splice(i, 1);
          }
        });
      }
    }
    onBeforeRouteUpdate((to) => {
      if ((to.name as string).toUpperCase() === "NOTFOUND") {
        return (activeKey.value = "");
      }
      if (list.every((item) => item.route !== to.path)) {
        list.push({ route: to.path, label: to.meta.title });
      }
      activeKey.value = to.path;
    });
    return () => (
      <Tabs
        type="editable-card"
        hide-add
        v-model={[activeKey.value, "activeKey"]}
        onEdit={(v, action) => removeTab(v, action)}
        onChange={(r) => push(r)}
      >
        {list.map((item) => (
          <Tabs.TabPane
            key={item.route}
            data-route={item.route}
            tab={item.label}
          ></Tabs.TabPane>
        ))}
      </Tabs>
    );
  },
});
