<template>
	<div class="page-selector-wrap">
		<select multiple name="selections[]"  class = "pageSelector browser-default" v-on:change="changed" v-model='getValues'>
			<option v-for="option in $store.state.page_selections" v-bind:value="option.ID" v-html="option.post_title" v-bind:key="option.post_id">{{ option.text }}</option>			
		</select>
	</div>
</template>
<script>
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
				selections:[]
			}
		},
		mounted:function(){

			this.loadPages(env);
			console.log(env);
			// console.log(this.$store.state.page_selections);
		},
		computed:{
			getSelections:function(){
				console.log(this.selections);
				return this.selections;
			},

			getValues(){
				if(!this.item.pages){
					this.item["pages"]=[];
				}
				// console.log(this.item.pages);
				return this.item.pages
			}
			
		},
		methods:{
			loadPages:function(env){
      		var context = this;
      		if(env=="debug"){
          		context.$store.state.page_selections = JSON.parse('[{"ID":"471","post_title":"Auto Draft"},{"ID":"2","post_title":"About Us"},{"ID":"19","post_title":"Contact Us"},{"ID":"156","post_title":"Home"},{"ID":"158","post_title":"Services"},{"ID":"160","post_title":"Portfolio"},{"ID":"162","post_title":"Gallery"},{"ID":"164","post_title":"Blog"},{"ID":"235","post_title":"Frequently Asked Questions (FAQ)"},{"ID":"473","post_title":"Test Frontend"},{"ID":"470","post_title":"Auto Draft"},{"ID":"1","post_title":"Blog Post Title"}]');
          		// console.log(context.selections);
      		}else{

      			axios.post( ajaxurl, qs.stringify( {
            		action:"ca_get_pages"            		
          		} ) ).then(response=>{
              		// console.log(response.data);
              		context.$store.state.page_selections = response.data;
              		// console.log(context.$store.state.page_selections);
          		})

          		}
          	
    		},
    		changed:function(){
    			var val = $(this.$el).find(".pageSelector").val()

				var params = {
                	item:this.item,
              		value:val,
              	}
              	// console.log("change");
              	// console.log(val);
				this.$store.commit("setPages",params);
			}
		}
	}
</script>