<template>
	<div class="serp-mobile-elements">
		<div class="serp-button-collections-wrap">
			<div class="serp-button-collections"  style="overflow: hidden"  v-if="loaded_data.length>0">
				<ul :class="getLayout" style="width:100%">
				<draggable v-model="loaded_data" :options="{draggable:'.item'}" :move="checkMove" :style="getStyle">
					<li v-for="(element, index) in loaded_data"  class="ca-share-button item waves-effect" :style="getWidth(element)" :id="element.id"  @click="setcurrentItem(index)" v-bind:key="index">						
						<context-menu :index="index">							
						<a :href="element.link_path" class = "waves-effect" :style="mainStyle(element)">
							<div class="ca_button_content" :class="setLayout(element)"> 
								<div class="icon-wrap" v-if="element.content_visibility!='text_only'" :style="getAlignStyle(element)">									
									<div class = "ca_icon fab " v-bind:class="element.icon" :style="iconStyle(element)"></div>
								</div>
								<div class="text-wrap" v-if="element.content_visibility!='icon_only'" :style="getAlignStyle(element)">									
								<div class = "ca_btn_text" :style="textStyle(element)" >{{element.link_text}}</div>
								<div class = "ca_btn_sub_text" :style="subTextStyle(element)" v-if="element.sub_text_enabled"><br>{{element.sub_text}}</div>
								</div>

							</div>							
						</a>
						</context-menu>
					</li>
				</draggable>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
	import draggable from 'vuedraggable'
	import ContextMenu from './ui/ContextMenu.vue'
	export default{
		name : "MobileElements",
		components: {
            draggable,
            ContextMenu
        },
		props:[
			
		],
		data:function(){
			return {
				// current_item:{}
			}
		},
		mounted:function(){

		},
		computed:{
			...mapState('cta',['loaded_data','current_item','container']),
			getLayout:function(){

				return this.container.layout;
			},
			getStyle:function(){
					return "width:"+this.container.cw.size+this.container.cw.unit+";";			
			},
			current_item:{
				get () {
        			return this.$store.state.current_item
      			},
      			set (value) {
       				 this.$store.commit('cta/setCurrentItem', value)
      			}
			},
			loaded_data:{
    		    get () {
    		          return this.$store.state.cta.loaded_data
    		        },
    		    set (value) {
    		       this.$store.commit('cta/updateLoadedData', value)
    		    }
    		},
		},
		methods:{	
			setcurrentItem:function(item){	
				this.current_item = item;
			},
			
			deleteItem:function(index){
				loaded_data.splice(index,1);
			},

			getWidth:function(el){
				var o = {};
				if(el.style.border.enable){
					var border_string = el.style.border.size+"px "+el.style.border.style+" "+el.style.border.color;
					o["border-top"] = (el.style.sides.top) ? border_string : "none";
					o["border-right"] = (el.style.sides.right) ? border_string : "none";
					o["border-bottom"] = (el.style.sides.bottom) ? border_string : "none";
					o["border-left"] = (el.style.sides.left) ? border_string : "none";
				}
				if(el.style.border_radius.enable){
					o["border-top-left-radius"] = el.style.border_radius.top_left+"px";
					o["border-top-right-radius"] = el.style.border_radius.top_right+"px";
					o["border-bottom-left-radius"] = el.style.border_radius.bottom_left+"px";
					o["border-bottom-right-radius"] = el.style.border_radius.bottom_right+"px";
				}

					o["margin-top"] = el.style.main.margin.top+"px";
					o["margin-left"] = el.style.main.margin.left+"px";
					o["margin-bottom"] = el.style.main.margin.bottom+"px";
					o["margin-right"] = el.style.main.margin.right+"px";

				o["background-color"] = el.style.main.background;
				o["width"] = el.style.main.width.size+ el.style.main.width.unit;
				o["height"] = el.style.main.height.size+ el.style.main.height.unit;
				return o
			},
			mainStyle:function(el){
				return {
					"background-color":el.style.main.background,
					"color":el.style.main.color				
				}
			},
			iconStyle:function(el){
				// console.log(el);
				return {
					"color":el.style.icon.color,
					"font-size":el.style.icon.size+el.style.icon.unit,
					"line-height":"1.5em"
				}
			},
			getAlignStyle:function(el){
				// console.log(el);
				if(el.sub_text_enabled){					
					return {
						// "vertical-align":"-webkit-baseline-middle",
						// "vertical-align":"middle",
					}
				}
			},
			textStyle:function(el){
				// console.log(el);
				return {
					"color":el.style.text.color,
					"font-size":el.style.text.size+el.style.text.unit,
					"line-height":el.style.text.size+el.style.text.unit
				}
			},
			subTextStyle:function(el){
				// console.log(el);
				return {
					"color":el.style.sub_text.color,
					"font-size":el.style.sub_text.size+el.style.sub_text.unit,
					"line-height":"0.4em"
				}
			},
			showVisibleContent:function(el){
				return el.style.main.visible_content
			},
			setLayout:function(el){
				var classes = "";

				if(el.content_visibility==""){
					classes+="show-all-elements "
				}else{
					classes+=el.content_visibility+"-elements "					
				}
				if(el.sub_text!="" && el.sub_text_enabled=="true" && (el.content_visibility!="icon_only")){
					classes+="subtext-enabled "
				}else{
					classes+=" "
				}

				classes += el.style.main.layout+" ";
				classes += el.style.text.align+"-text ";

				return classes;
			},		
			checkMove:function(t){			
				return t;			
        },		
		}
	}
</script>
<style>
.serp-button-collections>ul{
	margin: 0;
	padding: 0;
}
.serp-button-collections>ul>div {
display: flex;
justify-content: start;
flex-wrap: wrap;
}
.serp-button-collections>ul.start>div{
justify-content: start;
}
.serp-button-collections>ul.right>div{
justify-content: flex-end;
}
.serp-button-collections>ul.center>div{
justify-content: center;
}
.serp-button-collections>ul.space_around>div{
justify-content: space-around;
}
.serp-button-collections>ul.space_between>div{
justify-content: space-between;
}
.serp-button-collections>ul.space_evenly>div{
justify-content: space-evenly;
}
.serp-mobile-elements{
position: relative;
}
.serp-button-collections-wrap{
	position: absolute;
	bottom:0px;
	left: 5px;
	right: 0;
}
.vertical span {
display: block;
}
.ca_button_content.vertical{
display: block;
padding: 0px!important;
}
.ca_button_content {

	width: 100%;
		height: 100%;
    align-items: center;
}
.ca_button_content span {
    height: 100%;
    vertical-align: middle;
    line-height: 0;
}

.ca_button_content span:before {
    height: 100%;
    vertical-align: middle;
    display: flex;
    align-items: center;
}
.ca_button_content.vertical span {
    height: auto;
}

.ca_button_content.vertical span:before {
    height: 100%;
    vertical-align: middle;
    display: inline;
    align-items: center;
}
.serp-button-collections>ul .ca_button_content{
	/*padding: 0 10px;*/
	min-height: 42.2px;
}
li.ca-share-button.item{
	align-items: center;
	display: flex;
}
li.ca-share-button.item a {
width: 100%;
height: 100%;
}
.text_only .ca_icon{
	display: none;
}
.icon_only .ca_btn_text{
	display: none;

}
/*7/16/2020*/

.ca_button_content {
    display: flex;
    align-items: baseline;
    justify-content: center;
}
.ca_button_content {
    display: flex;
    align-items: baseline;
    justify-content: center;
}
.icon-wrap >div, .text-wrap>div {
    /*vertical-align: bottom;*/
}
.text-wrap, .icon-wrap {
    margin: 0 5px;
}
.ca_button_content.subtext-enabled  .ca_icon {
    vertical-align: middle;
}
.ca_button_content.icon_only-elements .icon-wrap {
    height: 100%;
    display: flex;
    align-items: center;
}
.ca_button_content.show-all-elements{
	padding: 5px 10px;
}
.ca_button_content.right-icon {
    flex-direction: row-reverse;
}
.ca_button_content.center-text .text-wrap{
    text-align: center;
}

.ca_button_content.left-text .text-wrap{
    text-align: left;
}

.ca_button_content.right-text .text-wrap{
    text-align: right;
}

.vertical.center-text .text-wrap,
.vertical.left-text .text-wrap,
.vertical.right-text .text-wrap{
	text-align: center;
}
.ca_button_content.show-all-elements {
    align-items: center;
    /*text-indent: 5px;*/
}

.ca_button_content.text_only-elements {
    padding: 10px 5px;
}
</style>