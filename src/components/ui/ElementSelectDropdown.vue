
<template>
	<div>        
        <a href="#!" @click='addItem' data-item-type="custom" class = "btn bg-white  border create-custom-btn"><i class='fa fa-plus'></i>  Custom Button</a>
	</div>
</template>
<script>
    
	export default{
		name: "ElementSelectDropdown",
		props:[
			'title',
			'loaded_data',
		],
		data(){
			return {				
            }
		},
		methods:{
		addItem:function(e){			
                this.create_item(this.createCustomButton());			
        },
        create_item:function(item){
            this.$store.state.loaded_data.push(item)
        },
        createCustomButton:function() {
        return {"type":"custom","name":"","icon":"fas fa-phone","link_text":"","sub_text":"","display_icon":"true","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":"0","content_visibility":"","style":{"main":{"adjust_width":"true","width":{"size":"5","unit":"em"},"adjust_height":"false","height":{"size":"5","unit":"em"},"layout":"","background":"#4184F4","color":"#000","margin":{"top":"0","left":"0","bottom":"0","right":"0"}},"icon":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"text":{"background":"#fff","color":"#ffffff","size":"1.5","unit":"em"},"border":{"enable":"","radius":"0","width":"0","color":"#fff","size":"1","style":"solid"},"sides":{"top":"true","right":"true","bottom":"true","left":"true"},"sub_text":{"background":"#fff","color":"#ffffff","size":"0.6","unit":"em"},"border_radius":{"enable":"true","top":"0","right":"0","bottom":"0","left":"0","top_left":"0","top_right":"0","bottom_right":"0","bottom_left":"0"},"class":"","id":""},"exclusive_page":"false","gtm":{"category":"","label":"","value":""}}
    }
		},
		mounted(){
			document.addEventListener('DOMContentLoaded', function() {
            // var elems = document.querySelectorAll('.dropdown-trigger');
            // M.Dropdown.init(elems,{});
            });
		}
	}
</script>
<style>
.dropdown-content {
    width: 320px!important;
}
ul.element-selector a {
    display: block;
    padding: 10px;
    width: 100%;
}

.tabs-details {
    background: #fff;
    width: 400px;
    height: 200px;
    z-index: 999;
    overflow-y: scroll;
}
</style>