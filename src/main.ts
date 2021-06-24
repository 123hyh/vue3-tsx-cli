/*
 * @Author: your name
 * @Date: 2021-06-19 12:35:20
 * @LastEditTime: 2021-06-19 19:05:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\src\main.js
 */
import "./styles/index.scss";
import './styles/index.less'
import src from "./assets/404.png";

const img = document.createElement("img");
img.src = src;
img.classList.add("wrap",'wrap-a');
document.body.appendChild(img);
import pkg from '../package.json'

img.onclick = function () {
     import(
        /* webpackChunkName: 'utils' */
        './utils'
        ).then(e => {
        console.log(pkg.version)
    })
    return false
}

