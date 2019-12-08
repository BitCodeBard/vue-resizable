import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Resize from '@/components/install'
Vue.use(Resize, 'Resize')

new Vue({
  render: h => h(App),
}).$mount('#app')
