
<template>
	<div>        
        <ul class="element-selector">
            <li><a href="#!" @click='addItem' data-item-type="custom" class = "create-custom-btn"><i class='fa fa-cog'></i>  Custom Button</a></li>
		</ul>
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
			var data = $(e.target).attr("data-item-type");
                this.create_item(this.createCustomButton());			
        },
        create_item:function(item){
            this.$store.state.loaded_data.push(item)
        },
        createCustomButton:function() {
        return {
            type:"custom",
            name:"",
            icon: "fas fa-rocket",
            link_text: "Click Here",
            display_icon:true,
            link_path: "#",
            width:'20',
            height:"",
            text_position:"right",
            visibility_options:"always_visible",
            visible_on_scroll_value:0,
            content_visibility:'',
             style:{
                main:{
                    adjust_width:"",
                    width:{
                        size:30,
                        unit:"%"
                    },
                    adjust_height:"",
                    height:{
                        size:43,
                        unit:"px"
                    },
                    layout:"",
                    background:"#47a3da",
                    color:"#000",
                    margin:{
                        top:0,
                        left:0,
                        bottom:0,
                        right:0
                    } 
                },
                icon:{
                    background:"#fff",
                    color:"#000",
                    size:12,
                    unit:"px"
                },
                text:{
                    background:"#fff",
                    color:"#000",
                    size:12,
                    unit:"px"
                },
                border:{
                    enable:"",
                    radius:0,
                    width:0,
                    color:"#fff"    ,
                    size:1,
                    style:"solid",
                },
                sides:{
                    top:true,
                    right:true,
                    bottom:true,
                    left:true 
                },
                border_radius:{
                    enable:true,
                    top:0,
                    right:0,
                    bottom:0,
                    left:0
                },                
                class:"",
                id:"",
            },
            exclusive_page:"",
            pages:[] ,
            gtm:{
                category:"",
                label:"",
                value:""
            },
        }
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