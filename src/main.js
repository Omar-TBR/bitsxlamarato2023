import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@/sass/_fonts.scss'
import '@/sass/vars.scss'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
