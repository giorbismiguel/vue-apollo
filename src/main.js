import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { createProvider } from './vue-apollo'



Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
