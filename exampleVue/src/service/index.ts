/*
 * @Author: your name
 * @Date: 2021-07-31 21:23:57
 * @LastEditTime: 2021-07-31 21:26:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\service\index.ts
 */
import axios from "axios";

const AXIOS = axios.create({
  baseURL: "",
  timeout: 6000,
});

AXIOS.interceptors.response.use(
  (response) => {
    return response;
  },
  (e) => {
    return Promise.reject(e);
  }
);

export default AXIOS;
