/*
 * @Author: your name
 * @Date: 2021-07-31 21:27:10
 * @LastEditTime: 2021-07-31 21:39:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\exampleVue\src\service\user\index.ts
 */

interface UserInfo {
  name: string;
  password: string;
  age: number;
}

import request from "../index";

/**
 * 获取用户信息
 * @returns
 */
export function getUserInfo() {
  return request.get<UserInfo>("/user/info");
}

/**
 * 用户登录
 */
export function login(data: Pick<UserInfo, "name" | "password">) {
  return request.post<UserInfo>("/user/login", {
    data,
  });
}
