<template>
	<div class="serp-mobile-elements">
		<div class="serp-button-collections-wrap">

			<div class="serp-button-collections"  style="overflow: hidden"  v-if="loaded_data.length>0">
				<ul :class="getLayout" >
				<draggable v-model="loaded_data" :options="{draggable:'.item'}" :move="checkMove" :style="getStyle">
					<li v-for="(element, index) in loaded_data"  class="ca-share-button item waves-effect" :style="getWidth(element)" :id="element.id"  @click="setcurrentItem(index)" v-bind:key="index">						
						<context-menu :index="index">							
						<a :href="element.link_path" class = "waves-effect" :style="mainStyle(element)">
							<div class="ca_button_content" :class="setVerticalLayout(element)"> 
								<span class = "ca_icon fab " v-bind:class="element.icon" :style="iconStyle(element)"></span>
								<span class = "ca_btn_text" :style="textStyle(element)" >{{element.link_text}}
								<span class = "ca_btn_sub_text" :style="subTextStyle(element)" ><br>{{element.sub_text}}</span>
								</span>
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

				return container.layout;
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
			}
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
					"font-size":el.style.icon.size+el.style.icon.unit
				}
			},
			textStyle:function(el){
				// console.log(el);
				return {
					"color":el.style.text.color,
					"font-size":el.style.text.size+el.style.text.unit
				}
			},
			subTextStyle:function(el){
				// console.log(el);
				return {
					"color":el.style.sub_text.color,
					"font-size":el.style.sub_text.size+el.style.sub_text.unit
				}
			},
			showVisibleContent:function(el){
				return el.style.main.visible_content
			},
			setVerticalLayout:function(el){
				return el.style.main.layout+ " "+el.content_visibility;
			},
			

			checkMove:function(t){
			
				return t;
			
            // this.list1.forEach(function(t) {
            //     "count_down" == t.type && setTimeout(function() {
            //         $("#" + t.id).find(".serp-clock").remove(),
            //         $("#" + t.id).find(".ca_button_content").append($("<span>", {
            //             class: "ca_btn_text serp-clock"
            //         })),
            //         $("#" + t.id).find(".serp-clock").countdown("2020/10/10", function(t) {
            //             $(this).html(t.strftime(format))
            //         })
            //     }, 500)
            // })
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
	padding: 10px;
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

</style>