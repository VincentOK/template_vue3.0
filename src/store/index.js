// 这里跟vue2有点区别，vue2中是直接导入vue，然后通过vue.use(xxx)
import { createStore } from 'vuex'
import getters from './getters'

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./module', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

// 调用createStore
export default createStore({
  getters,
  modules
})
