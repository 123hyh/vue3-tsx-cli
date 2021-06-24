const webpack = require("webpack");
const {merge} = require("webpack-merge");

/*
 * @Author: your name
 * @Date: 2021-06-19 12:54:37
 * @LastEditTime: 2021-06-19 16:03:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\scripts\production.js
 */
const PROD = 'production'
const {baseWebpackOptions, baseCssRules} = require("./baseOpts");
const opts = merge(baseWebpackOptions, {
        mode: PROD,
        output: {
            clean: true,
        }
    },
    baseCssRules(PROD)
);
webpack(opts).run((err, result) => {
    if (err || result.compilation.errors) {
        console.error(result.compilation.errors);
    }
});
