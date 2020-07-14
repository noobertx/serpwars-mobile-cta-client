const state = {
	title:"Untitled",
	loaded_data:[{"type":"custom","name":"","icon":"fas fa-phone","link_text":"","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"5","unit":"em"},"adjust_height":"false","height":{"size":"5","unit":"em"},"layout":"","background":"#4184F4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"true","top":"0","right":"0","bottom":"0","left":"0","top_left":"200","top_right":"200","bottom_right":"200","bottom_left":"200"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}}],
	current_item:0,
	container:{"class":"","id":"","layout":"left","gtm":{"category":""},"width":"auto","cw":{"size":"100","unit":"%"}},
	page_selections:[]
}

const mutations={
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
		state[cont][params.item][params.field] = params.value;
	},
	setCurrentItem:function(state,params){
		// setTimeout(function(){
		// 	jQuery(".demo").trigger("keyup");
		// },300)
		state.current_item = params;
	},
	updateLoadedData(state,val){
		state.loaded_data = val;
	},
	updateContainer(state,val){
		state.cont = val;
	},
}
const actions={
		changeIcon:function(context,icon){
			context.commit('setIcon',icon)
		},
		changeCurrentItem:function(context,params){
			context.commit('setCurrentItem',params);
			jQuery(".demo").trigger("keyup");
		}
	}
const getters = {
	
}
export const cta = {
	namespaced: true,
    state,
    actions,
    mutations,
    getters
}