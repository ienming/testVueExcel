import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './App.vue'

import "./assets/styles/mystyle.css"

Vue.config.productionTip = false
Vue.use(VueRouter);
// Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  router,
  mounted: function () {
    document.title = "首頁"
},
}).$mount('#app')