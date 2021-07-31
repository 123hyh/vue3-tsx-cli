import { defineComponent, reactive } from "vue";
import styles from "./index.module.scss";
/*
 * @Author: your name
 * @Date: 2021-07-31 17:18:47
 * @LastEditTime: 2021-07-31 19:02:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\view\Login\index.tsx
 */
import { Form, Input, Button } from "ant-design-vue";
import { useStore } from "vuex";
import { STORE_KEY } from "../../store";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Login",
  setup() {
    const formState = reactive({
      user: "",
      password: "",
    });
    const rules = reactive({
      user: [
        {
          required: true,
          message: "必填",
        },
      ],
      password: [
        {
          required: true,
          message: "必填",
        },
      ],
    });
    const { validate, validateInfos } = Form.useForm(formState, rules);
    const {dispatch} = useStore(STORE_KEY)
    const {replace} = useRouter()
    
    /**
     * 点击登录事件
     */
    async function onFinish() {
      await validate();
      await dispatch('user/login',formState);
      replace('/')
    }
    return () => (
      <div class={styles.logWrap}>
        <Form model={formState}>
          <Form.Item label="用户名" name="user" {...validateInfos.user}>
            <Input v-model={[formState.user, "value"]}></Input>
          </Form.Item>
          <Form.Item label=" 密码" name="password" {...validateInfos.password}>
            <Input
              type="password"
              v-model={[formState.password, "value"]}
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => onFinish()} block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  },
});
