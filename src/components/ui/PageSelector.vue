<template>
	<div class="page-selector-wrap">

		<select multiple name="selections[]"  class = "pageSelector browser-default" style="width:100%" v-on:change="changed" v-model='getValues'>
			<option v-for="option in page_selections" v-bind:value="option.ID" v-html="option.post_title" v-bind:key="option.post_id">{{ option.text }}</option>			
		</select>
	</div>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
	import axios from 'axios';
	import qs  from 'qs';
	export default{
		name:"PageSelector",
		props:[
			'field',
			'item'
		],
		data(){
			return {
				ajaxurl:ajaxurl,
				selections:[]
			}
		},
		mounted:function(){

			this.loadPages();
			// console.log(this.$store.state.page_selections);
		},
		computed:{
			...mapState('cta',['loaded_data','current_item','page_selections']),
			getSelections:function(){
				console.log(this.selections);
				return this.selections;
			},

			getValues(){
				if(!this.item.pages){
					this.item["pages"]=[];
				}
				return this.item.pages
			},
			page_selections:{
    		    get () {
    		          return this.$store.state.cta.page_selections
    		        },
    		    set (value) {
    		       this.$store.commit('cta/updatePageSelection', value)
    		    }
    		},
			
		},
		methods:{
			loadPages:function(){
      		var context = this;
      			axios.post(this.ajaxurl, qs.stringify( {
            		action:"ca_get_pages"            		
          		} ) ).then(response=>{
              		context.page_selections = response.data;
          		})
    		},
    		changed:function(){
    			var val = $(this.$el).find(".pageSelector").val()
				var params = {
                	item:this.item,
              		value:val,
              	}
				this.$store.commit("setPages",params);
			}
		}
	}
</script>