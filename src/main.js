import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueToastr from "vue-toastr";
import "./translate.css";

Vue.config.productionTip = false
Vue.use(VueTypedJs)
Vue.use(VueToastr);
Vue.use(VueAxios, axios)





new Vue({
  render: h => h(App),
}).$mount('#app'
)
