/*
 * @Author: your name
 * @Date: 2021-06-22 21:53:07
 * @LastEditTime: 2021-06-23 20:47:10
 * @LastEditors: Please set LastEditors
 * @Description: vue3 tsx hrm
 * @FilePath: \webpack-vscode\scripts\loader\vue3HotLoader.js
 */
const path = require("path");
const loaderUtils = require("loader-utils");
const { genHotReloadCode } = require("./utils");
const hash = require("hash-sum");
module.exports = function hotLoader(source) {
  const loaderContext = this;
  const {
    mode,
    target,
    sourceMap,
    rootContext,
    resourcePath,
    resourceQuery = "",
  } = loaderContext;
  const isProduction = mode === "production";

  if (isProduction) {
    return source;
  }
  const stringifyRequest = (r) =>
    loaderUtils.stringifyRequest(loaderContext, r);
  const filename = resourcePath.replace(/\?.*$/, "");
  if (/\.tsx/.test(filename) === false) return source;
  const rawShortFilePath = path
    .relative(rootContext || process.cwd(), filename)
    .replace(/^(\.\.[\/\\])+/, "");
  const shortFilePath = rawShortFilePath.replace(/\\/g, "/");

  const id = hash(shortFilePath);
  const src = resourcePath;

  const scriptRequest = stringifyRequest(src);
  /** script */
  const scriptImport =
    `import script from ${scriptRequest};\n` +
    // support named exports
    `export * from ${scriptRequest};\n` +
    `${source};\n`;

  let code = scriptImport;
  code += `\nscript.__file = ${JSON.stringify(
    rawShortFilePath.replace(/\\\\/g, "/")
  )};`;
  // 热更新
  code += genHotReloadCode(id, scriptRequest, "script");
  return code;
};
