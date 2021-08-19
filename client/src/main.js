import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GoogleSignInButton from 'vue-google-signin-button-directive'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

import VueSocialSharing from 'vue-social-sharing'
Vue.use(VueSocialSharing);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  GoogleSignInButton,
  render: h => h(App)
}).$mount('#app')
