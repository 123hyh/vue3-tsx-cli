/*
 * @Author: your name
 * @Date: 2021-06-22 22:17:35
 * @LastEditTime: 2021-06-23 18:43:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-vscode\scripts\loader\utils.js
 */
// __VUE_HMR_RUNTIME__ is injected to global scope by @vue/runtime-core

module.exports.genHotReloadCode = function genHotReloadCode(
    id,
    scriptRequest,
    scriptOpts
) {
    return `
/* hot reload */
if (module.hot) {
  script.__hmrId = "${id}"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('${id}', script)) {
    api.reload('${id}', script)
  }
  ${genTemplateHotReloadCode(id, scriptRequest, scriptOpts)}
}
`
}

function genTemplateHotReloadCode(id, request, scriptOpts) {
    return `
  module.hot.accept(${request}, () => {
    api.rerender('${id}', ${scriptOpts.setup})
  })
`
}
