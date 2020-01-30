import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'materialize-css/dist/css/materialize.min.css'


import '@fortawesome/fontawesome-free/css/all.min.css'



library.add(faUserSecret)


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
