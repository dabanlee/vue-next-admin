import { createStore } from 'vuex'

const files = require.context('./modules', true, /\.ts$/)

const modules = files.keys().reduce((modules: { [key: string]: any }, path) => {
  const name = path.replace(/^\.\/(.*)\.\w+$/, '$1')
  modules[name] = files(path).default
  return modules
}, {})

export default createStore({
  modules,
})
