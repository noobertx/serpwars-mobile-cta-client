/*eslint-disable no-alert */
/* global M */

<template>
	<div>
        <!-- Dropdown Trigger -->
        <!-- <a class='dropdown-trigger white-text blue btn' href='#' data-target='dropdown1'><i class="fa fa-plus"></i> Create</a> -->
        <!-- Dropdown Structure -->
        <!-- <ul id='dropdown1' class='dropdown-content' style="width:320px;"> -->
        <ul class="element-selector">
            <li><a href="#!" @click='addItem' data-item-type="custom" class = "create-custom-btn"><i class='fa fa-cog'></i>  Custom Button</a></li>
            <!-- <li><a href="#!" @click='addItem' data-item-type="static_text"  class = "create-custom-btn"><i class='fa fa-font'></i>  Static Text</a></li> -->
            <!-- <li><a href="#!" @click='addItem' data-item-type="fb_messenger"  class = "create-custom-btn"><i class='fa fa-comment'></i>  Messenger button</a></li> -->
            <!-- <li><a href="#!" @click='addItem' data-item-type="count_down"  class = "create-custom-btn"><i class='fa fa-hourglass'></i>  Count Down</a></li> -->
            <!-- <li><a href="#!" @click='addItem' data-item-type="toggle"  class = "create-custom-btn"><i class='fa fa-bars'></i>  Toggle Secondary</a></li> -->
            <li><a href="#!" @click='addItem' data-item-type="fb_share"  class = "create-custom-btn waves-effect"><i class='fab fa-facebook'></i>  Facebook Share</a></li>
            <li><a href="#!" @click='addItem' data-item-type="twitter_share"  class = "create-custom-btn waves-effect"><i class='fab fa-twitter'></i>  Twitter Share</a></li>
            <li><a href="#!" @click='addItem' data-item-type="google_share"  class = "create-custom-btn waves-effect"><i class='fab fa-google-plus'></i>  Google Share</a></li>
            <li><a href="#!" @click='addItem' data-item-type="pinterest_share"  class = "create-custom-btn waves-effect"><i class='fab fa-pinterest'></i>  Pinterest Share</a></li>
            <li><a href="#!" @click='addItem' data-item-type="linkedin_share"  class = "create-custom-btn waves-effect"><i class='fab fa-linkedin'></i>  LinkedIn Share</a></li>
            <li><a href="#!" @click='addItem' data-item-type="digg_share"  class = "create-custom-btn waves-effect"><i class='fab fa-digg'></i>  Digg Share</a></li>
            <li><a href="#!" @click='addItem' data-item-type="tumblr_share"  class = "create-custom-btn waves-effect"><i class='fab fa-tumblr'></i>  Tumblr Share</a></li>
            <li><a href="#!" @click='addItem' data-item-type="reddit_share"  class = "create-custom-btn waves-effect"><i class='fab fa-reddit'></i>  Reddit Share</a></li>
            <li><a href="#!" @click='addItem' data-item-type="yahoo_share"  class = "create-custom-btn waves-effect"><i class='fab fa-yahoo'></i>  Yahoo Share</a></li>
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