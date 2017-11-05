import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import axios from 'axios'
import $ from 'jquery'
import Methods from './config/methods'

Vue.use(VueRouter)
Vue.prototype.axios = axios
Vue.prototype.$methods = Methods

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
