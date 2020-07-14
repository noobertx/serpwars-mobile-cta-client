<template>
	<div class="settings-panel-content">
		<b-row>
			<b-col cols="3" sm="12">
				<label>Category</label>     
			</b-col>
			<b-col cols="9" sm="12">
				<input type="text" class="serp-textfield browser-default" name="button_text" v-model="loaded_data[current_item].gtm.category">   
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="3" sm="12">
				<label>Label</label>     
			</b-col>
			<b-col cols="9" sm="12">
				<input type="text" class="serp-textfield browser-default" name="button_text" v-model="loaded_data[current_item].gtm.label">   
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="3" sm="12">
				<label>Value</label>     
			</b-col>
			<b-col cols="9" sm="12">
				<input type="text" class="serp-textfield browser-default" name="button_text" v-model="loaded_data[current_item].gtm.value"> 
			</b-col>
		</b-row>
	</div>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		name:"TagMangagerSettings",
    	data() {
      		return {
       
      		}
    	},
    	computed:{
			...mapState('cta',['loaded_data','current_item','container'])
		}
  	}	
</script>