import Vue from 'vue';
import Vuex from 'vuex';
import { cta } from '../modules/cta.modules.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {       
        cta
    }
})