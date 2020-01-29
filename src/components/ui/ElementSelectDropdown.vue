
<template>
	<div>        
        <ul class="element-selector">
            <li><a href="#!" @click='addItem' data-item-type="custom" class = "create-custom-btn"><i class='fa fa-cog'></i>  Custom Button</a></li>
		</ul>
	</div>
</template>
<script>
    import JQuery from 'jquery'
    let $ = JQuery
	export default{
		name: "ElementSelectDropdown",
		props:[
			'title',
			'loaded_data',
		],
		data(){
			return {
				ca_social_media_collection :{
					"fb_share":{
                        icon:"fab fa-facebook",
                        link_text:"Share"
                    },
                    "google_share":{
                        icon:"fab fa-google-plus",
                        link_text:"Share"
                    },
                    "twitter_share":{
                        icon:"fab fa-twitter",
                        link_text:"Share"
                    },
                    "pinterest_share":{
                        icon:"fab fa-pinterest",
                        link_text:"Share"
                    },
                    "linkedin_share":{
                        icon:"fab fa-linked-in",
                        link_text:"Share"
                    },
                    "digg_share":{
                        icon:"fab fa-digg",
                        link_text:"Share"
                    },
                    "reddit_share":{
                        icon:"fab fa-reddit",
                        link_text:"Share"
                    },
                    "yahoo_share":{
                        icon:"fab fa-yahoo",
                        link_text:"Share"
                    },
                    "static_text":{
                        icon:"fab fa-google-plus",
                        link_text:"Share"
                    },
                    "fb_messenger":{
                        icon:"fa-comments-o",
                        link_text:"Send a Message"
                    },
                    "count_down":{
                        icon:"fa-hourglass",
                        link_text:"countdown"
                    },
                    "toggle":{
                        icon:"fa-bars",
                        link_text:"Toggle"
                    },
                    "facebook":{
                        icon:"fab fa-facebook",
                        link_text:"Share"
                    },
                    "twitter":{
                        icon:"fab fa-twitter",
                        link_text:"Share"
                    },
                    "google_plus":{
                        icon:"fab fa-google-plus",
                        link_text:"Share"
                    },
                    "pinterest":{
                        icon:"fab fa-pinterest",
                        link_text:"Share"
                    },
                    "linked_in":{
                        icon:"fab fa-linkedin",
                        link_text:"Share"
                    },
                    "buffer":{
                        icon:"fab fa-buffer"
                    },
                    "digg":{
                        icon:"fab fa-digg"
                    },
                    "tumblr":{
                        icon:"fab fa-tumblr"
                    },
                    "reddit":{
                        icon:"fab fa-reddit"
                    },
                    "yahoo":{
                        icon:"fab fa-tumblr"
                    }
                }
            }
		},
		methods:{
		addItem:function(e){			
			var data = $(e.target).attr("data-item-type");
			if(data=="custom"){
                console.log(JSON.stringify(this.createCustomButton()));
                this.create_item(this.createCustomButton());
            }else{
                this.create_item(this.createSocialButton(data));
            }
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
    },
    createSocialButton:function(type) {
        var context = this;
        return {
            type:type,
            name:"",
            icon:context.ca_social_media_collection[type].icon,
            link_text: context.ca_social_media_collection[type].link_text,
            link_path: "#",
            width:30,
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
                    background:"#47a3da",
                    color:"#000",
                    layout:"",
                    margin:{
                        top:0,
                        left:0,
                        bottom:0,
                        right:0
                    },
                    border:{
                        enable:"",
                        size:1,
                        style:"solid",
                        color:"#000",
                        top:1,
                        right:1,
                        bottom:1,
                        left:1
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
            gtm:{
                    category:"",
                    label:"",
                    value:""
            },
            exclusive_page:"",
            pages:[] ,
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