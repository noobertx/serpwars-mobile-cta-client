import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import '@fortawesome/fontawesome-free/css/all.min.css'

// import '@fortawesome/fontawesome-free/css/fontawesome.min.css'

// import 'materialize-css/dist/css/materialize.css'
import 'rangeslider.js/dist/rangeslider.css'
import 'rangeslider.js/dist/rangeslider.min.js'
import 'spectrum-colorpicker/spectrum.css'
import 'spectrum-colorpicker/spectrum.js'


import 'fontawesome-iconpicker/dist/css/fontawesome-iconpicker.min.css'
import 'fontawesome-iconpicker/dist/js/fontawesome-iconpicker.min.js'


library.add(faUserSecret)


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
