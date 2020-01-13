import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		title:"Untitled",
		loaded_data:[],
		current_item:-1,
		container:JSON.parse('{"class":"","id":"","layout":"start","gtm":{"category":""},"width":"auto","cw":{"size":100,"unit":"%"}}'),
		page_selections:[]
	},
	mutations:{
		setIcon:function(state,icon){
			state.loaded_data[state.current_item].icon = icon
			// console.log(icon);
		},
		setColor:function(state,params){
			state.loaded_data[state.current_item].style[params.item][params.field] = params.value;
		},
		adjustWidth:function(state,params){
			// console.log(params);
			state.loaded_data[state.current_item].style[params.item][params.field] = parseInt(params.value);
		},
		setPages:function(state,params){
			state.loaded_data[state.current_item].pages = params.value;
		},
		setUnit:function(state,params){
			state[container][params.item][params.field] = params.value;

		},
		setCurrentItem:function(state,params){
			setTimeout(function(){
				jQuery(".demo").trigger("keyup");
			},300)
			state.current_item = params;
		}
	},
	actions:{
		changeIcon:function(context,icon){
			context.commit('setIcon',icon)
		},
		changeCurrentItem:function(context,params){
			context.commit('setCurrentItem',params);
			jQuery(".demo").trigger("keyup");
		}
	}
})