import axios from 'axios';
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import qs  from 'qs';
function addFeatures(item){
      item.forEach(function(o,i){
        if(!o.hasOwnProperty('sub_text')){
          item[i].sub_text = "";
        }
        if(!o.style.hasOwnProperty('sub_text')){
          item[i].style.sub_text = {"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"};
        }         
      })
      return item;
}

const state = {
	id:0,
	ajaxurl:"",
	title:"From Local",
	loaded_data:[{"type":"custom","name":"","icon":"fas fa-phone","link_text":"","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"5","unit":"em"},"adjust_height":"false","height":{"size":"5","unit":"em"},"layout":"","background":"#4184F4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"true","top":"0","right":"0","bottom":"0","left":"0","top_left":"200","top_right":"200","bottom_right":"200","bottom_left":"200"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}}],
	current_item:0,
	container:{"class":"","id":"","layout":"left","gtm":{"category":""},"width":"custom","cw":{"size":"100","unit":"%"}},
	page_selections:[],
	isLoaded:false
}

const mutations={
	setIcon:function(state,icon){
			state.loaded_data[state.current_item].icon = icon
	},
	setColor:function(state,params){
		state.loaded_data[state.current_item].style[params.item][params.field] = params.value;
	},
	adjustWidth:function(state,params){
		state.loaded_data[state.current_item].style[params.item][params.field] = parseInt(params.value);
	},
	setPages:function(state,params){
		state.loaded_data[state.current_item].pages = params.value;
	},
	setUnit:function(state,params){
		state[cont][params.item][params.field] = params.value;
	},
	setCurrentItem:function(state,params){
		state.current_item = params;
	},
	updateTitle(state,val){
		state.title = val;
	},
	updateLoadedData(state,val){
		state.loaded_data = val;
	},
	updateContainer(state,val){
		state.container = val;
	},
	updatePageSelection(state,val){
		state.page_selections = val;
	},
	updateID(state,val){
		state.id = val;
	},
	updateAJAXURL(state,val){
		state.ajaxurl = val;
	},
}
const actions={
		changeIcon:function(context,icon){
			context.commit('setIcon',icon)
		},
		changeCurrentItem:function(context,params){
			context.commit('setCurrentItem',params);
			// jQuery(".demo").trigger("keyup");
		},
    	deleteElement:function({state,commit}){
      		state.loaded_data.splice(this.current_item,1)
    	},
		setData:function({state,commit},params){
			commit('updateID', params.id);
			commit('updateAJAXURL', params.ajaxurl);
		},
		loadData:function({state,commit}){



      		env = 'live';
      // var context = this;
          var context = this;
          var data ="";
          axios.post(state.ajaxurl, qs.stringify( {
            action:"load_item",
            id:state.id
          } ) ).then(response=>{
              state.isLoaded = true;
              var  parseData = response.data;
              var  content = JSON.parse(parseData.content);

              content.loaded_data = addFeatures(content.loaded_data);
              state.loaded_data = content.loaded_data;
              state.container = content.container;
              commit('updateLoadedData', state.loaded_data)
              commit('updateContainer', state.container)
              commit('updateTitle', parseData.title)
              
              Toastify({
                text: "Loaded CTA Buttons",
                duration: 3000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: 'right', // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #47a3da, #4284f4)",
                stopOnFocus: true // Prevents dismissing of toast on hover
              }).showToast();
          })
    },
    savingData:function(){
      state.isSaving = true;
        var title =  state.title;
        var loaded_data =  JSON.stringify(state.loaded_data);
        var container =  JSON.stringify(state.container);  
        axios.post( state.ajaxurl, qs.stringify( 
            {
            action:"save_item",
            id:state.id,
            title:state.title,
            loaded_data:JSON.stringify(state.loaded_data),
            container:JSON.stringify(state.container),
          }  ) ).then(response=>{
            var d = response.data;
            Toastify({
              text: d.status+" "+d.message,
              duration: 3000,
              close: true,
              gravity: "bottom", // `top` or `bottom`
              position: 'right', // `left`, `center` or `right`
              backgroundColor: "linear-gradient(to right, #47a3da, #4284f4)",
              stopOnFocus: true // Prevents dismissing of toast on hover
            }).showToast();
            if(d.return_id==-1){              
              this.isSaving = false;
            }else{
            }
        })
    },    

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