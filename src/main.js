import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import myCharts from './lib/myCharts'

if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.use(myCharts);
Vue.prototype.$bus = Bus

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
