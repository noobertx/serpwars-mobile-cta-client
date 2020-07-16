<template>
	<div class="preset-selector mb-2">
		<ul>
			<li>
				<a href="#" @click="setPreset(0)">
				<div class="imgwrap"></div>
				<div class="preset-label">Preset 1</div>
				</a>
			</li>
			<li>
				<a href="#" @click="setPreset(1)">
				<div class="imgwrap"></div>
				<div class="preset-label">Preset 2</div>
				</a>
			</li>
			<li>
				<a href="#" @click="setPreset(2)">
				<div class="imgwrap"></div>
				<div class="preset-label">Preset 3</div>
				</a>
			</li>
			<li>
				<a href="#" @click="setPreset(3)">
				<div class="imgwrap"></div>
				<div class="preset-label">Preset 4</div>
				</a>
			</li>
			<li>
				<a href="#" @click="setPreset(4)">
				<div class="imgwrap"></div>
				<div class="preset-label">Preset 5</div>
				</a>
			</li>
			<li>
				<a href="#" @click="setPreset(5)">
				<div class="imgwrap"></div>
				<div class="preset-label">Preset 6</div>
				</a>
			</li>
			<li>
				<a href="#" @click="setPreset(6)">
				<div class="imgwrap"></div>
				<div class="preset-label">Preset 7</div>
				</a>
			</li>
			<li>
				<a href="#" @click="setPreset(7)">
				<div class="imgwrap"></div>
				<div class="preset-label">Custom</div>
				</a>
			</li>

		</ul>
	</div>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
	export default{
		name: 'ContainerPresets',
		data:function(){
			return {
				presets: [

{"name":"Preset 1","loaded_data":[{"type":"custom","name":"","icon":"fas fa-phone","link_text":"","sub_text_enabled":"false","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"5","unit":"em"},"adjust_height":"false","height":{"size":"5","unit":"em"},"layout":"","background":"#4184F4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"true","top":"0","right":"0","bottom":"0","left":"0","top_left":"200","top_right":"200","bottom_right":"200","bottom_left":"200"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}}],"container":{"class":"","id":"","layout":"left","gtm":{"category":""},"width":"auto","cw":{"size":"100","unit":"%"}}},
{"name":"Preset 2","loaded_data":[{"type":"custom","name":"","icon":"fas fa-arrow-circle-down","link_text":" Download Now","sub_text_enabled":"false","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"100","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#4184F4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}}],"container":{"class":"","id":"","layout":"start","gtm":{"category":""},"width":"auto","cw":{"size":"100","unit":"%"}}},
{"name":"Preset 3","loaded_data":[{"type":"custom","name":"","icon":"fas fa-mobile-alt","link_text":" Contact Us","sub_text_enabled":"false","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"50","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#4184F4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"0.7","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}},{"type":"custom","name":"","icon":"fas fa-envelope","link_text":" Subscribe Now","sub_text_enabled":"false","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"50","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#4284f4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"0.7","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}}],"container":{"class":"","id":"","layout":"start","gtm":{"category":""},"width":"auto","cw":{"size":"100","unit":"%"}}},
{"name":"Preset 4","loaded_data":[{"type":"custom","name":"","icon":"fas fa-mobile-alt","link_text":" Contact Us","sub_text_enabled":"false","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"75","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#4184F4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"0.9","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}},{"type":"custom","name":"","icon":"fas fa-envelope ","link_text":"","sub_text_enabled":"false","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"25","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#4284f4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}}],"container":{"class":"","id":"","layout":"start","gtm":{"category":""},"width":"auto","cw":{"size":"100","unit":"%"}}},
{"name":"Preset 5","loaded_data":[{"type":"custom","name":"","icon":"fas fa-mobile-alt","link_text":" Contact Us","sub_text_enabled":"false","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"50","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#4184F4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}},{"type":"custom","name":"","icon":"fas fa-envelope ","link_text":"","sub_text_enabled":"false","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"25","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#4284f4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}},{"type":"custom","name":"","icon":"fas fa-bookmark","link_text":"","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"25","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#c9185f","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em"},"text":{"background":"#fff","color":"#000","size":"12","unit":"px","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}}],"container":{"class":"","id":"","layout":"start","gtm":{"category":""},"width":"auto","cw":{"size":"100","unit":"%"}}},
{"name":"Preset 6","loaded_data":[{"type":"custom","name":"","icon":"fas fa-bookmark","link_text":"","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"25","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#c9185f","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em"},"text":{"background":"#fff","color":"#000","size":"12","unit":"px","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}},{"type":"custom","name":"","icon":"fas fa-mobile-alt","link_text":"","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"25","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#4184F4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}},{"type":"custom","name":"","icon":"fas fa-envelope ","link_text":"","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"25","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#4284f4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}},{"type":"custom","name":"","icon":"fas fa-address-book","link_text":"","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"25","unit":"%"},"adjust_height":"false","height":{"size":"43","unit":"px"},"layout":"","background":"#db7146","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em"},"text":{"background":"#fff","color":"#000","size":"12","unit":"px","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}}],"container":{"class":"","id":"","layout":"start","gtm":{"category":""},"width":"auto","cw":{"size":"100","unit":"%"}}},
{"name":"Preset 7","loaded_data":[{"type":"custom","name":"","icon":"fas fa-angle-double-right","link_text":"","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"3.5","unit":"em"},"adjust_height":"false","height":{"size":"3.5","unit":"em"},"layout":"","background":"#4284f4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"true","top":"0","right":"0","bottom":"0","left":"0","top_left":"200","top_right":"200","bottom_right":"200","bottom_left":"200"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}},{"type":"custom","name":"","icon":"fas fa-mobile-alt","link_text":" Contact Us","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"80","unit":"%"},"adjust_height":"true","height":{"size":"54","unit":"px"},"layout":"","background":"#4184F4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1.2","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"true","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}}],"container":{"class":"","id":"","layout":"space_evenly","gtm":{"category":""},"width":"auto","cw":{"size":"100","unit":"%"}}},
{"name":"Custom","loaded_data":[{"type":"custom","name":"","icon":"fas fa-mobile-alt","link_text":" Custom Button","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"100","unit":"%"},"adjust_height":"","height":{"size":"43","unit":"px"},"layout":"","background":"#4284f4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#fff","size":"2","unit":"em"},"text":{"background":"#fff","color":"#fff","size":"1","unit":"em","align":"center"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"true","top":"0","right":"0","bottom":"0","left":"0"},"class":"","id":""},"exclusive_page":"","pages":[],"gtm":{"category":"","label":"","value":""}}],"container":{"class":"","id":"","layout":"start","gtm":{"category":""},"width":"auto","cw":{"size":"100","unit":"%"}}}
]
			};
		},
		mounted:function(){
			// console.log(this);
		},
		computed:{
			...mapState('cta',['loaded_data','current_item','container']),
			container:{
				get () {
        			return this.$store.state.container
      			},
      			set (value) {
       				 this.$store.commit('cta/updateContainer', value)
      			}
			},
			loaded_data:{
				get () {
        			return this.$store.state.loaded_data
      			},
      			set (value) {
       				 this.$store.commit('cta/updateLoadedData', value)
      			}
			}
		},
		methods:{
			setPreset:function(index){
				this.loaded_data = this.presets[index].loaded_data;
				this.container = this.presets[index].container;
			}
		}
	}
</script>
<style>

	.preset-selector ul li .imgwrap{
		width: 100%;		height: 32px;    	background-repeat: no-repeat!important;    	background-size: 100% 100%!important;
	}
	.preset-selector ul li a {
	background: #fff;
    display: block;
    float: left;
    width: 68px;
    height: 68px;
    text-align: center;
    padding: 4px;
    border: 1px solid #ccc;
    margin: -1px;
    font-size:10px;
	}

	.preset-selector li a:nth-child(1),
	.preset-selector li a:nth-child(5) {
    	margin-left:0
	}


	.preset-selector ul li a .preset-label {    	padding: 10px;	}
</style>