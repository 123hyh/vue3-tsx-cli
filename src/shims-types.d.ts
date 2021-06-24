/*
 * @Author: your name
 * @Date: 2021-06-19 15:49:02
 * @LastEditTime: 2021-06-23 20:39:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\src\shims-types.d.ts
 */

declare module "*.png" {
    const classes: string;
    export default classes;
}

declare module "*.scss" {
    const classes: any;
    export default classes;
}

declare module "*.json" {
    const classes: { readonly [name: string]: any };
    export default classes;
}

declare module "*.vue" {
    const classes: { readonly [name: string]: any };
    export default classes;
}


