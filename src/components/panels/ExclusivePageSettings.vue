<template>
	<div class="settings-panel-content">
		<b-row>
			<b-col cols="12" sm="12">
				<label for="exclusive_page">                    
                <input type="checkbox" name="exclusive_page" id="exclusive_page"  v-model="$store.state.loaded_data[$store.state.current_item].exclusive_page" true-value="true" false-value=""> Show Only On Specific Page
                </label>
			</b-col>
		</b-row>
		<b-row v-if="displayExclusivePage">
			<b-col cols="12" sm="12">
				<page-selector field="pages" :item="$store.state.loaded_data[$store.state.current_item]"></page-selector>
			</b-col>
		</b-row>
	</div>
</template>
<script>
	import PageSelector from '../ui/PageSelector.vue'
	export default {
		name:"ExclusivePageSettings",
    	data() {
      		return {
       
      		}
    	},
    	computed:{
    		displayExclusivePage(){
      			return (this.$store.state.loaded_data[this.$store.state.current_item].exclusive_page=="true");      
    		}
    	},
    	components: {
      		PageSelector
    	},
  	}
	
</script>