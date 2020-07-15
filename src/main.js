import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
// import cors  from "cors";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import 'materialize-css/dist/css/materialize.min.css'


import '@fortawesome/fontawesome-free/css/all.min.css'


library.add(faUserSecret)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false


// App.use(cors());

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
