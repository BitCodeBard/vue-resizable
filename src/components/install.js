import Resize from './Resize'

export default {
  install(Vue, componentsName = 'Resize') {
    Vue.component(componentsName, Resize)
  }
}