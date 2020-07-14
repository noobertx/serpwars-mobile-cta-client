<template>
	<div class="settings-panel-content">
		<b-row>
			<b-col cols="6" sm="6">
				<label>Top (px)</label>
                <input type="number" class = "input_number" v-model="loaded_data[current_item].style.main.margin.top">
			</b-col>
			<b-col cols="6" sm="6">
				<label>Right (px)</label>
                <input type="number" class = "input_number" v-model="loaded_data[current_item].style.main.margin.right">
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="6" sm="6">
				<label>Bottom (px)</label>
                <input type="number" class = "input_number" v-model="loaded_data[current_item].style.main.margin.bottom">
			</b-col>
			<b-col cols="6" sm="6">
				<label>Left (px)</label>
                <input type="number" class = "input_number" v-model="loaded_data[current_item].style.main.margin.left">
			</b-col>
		</b-row>
	</div>
</template>
<script>	
	import { mapState, mapActions } from 'vuex'
	export default {
		name:"MarginSettings",
    	data() {
      		return {
       			
      		}
    	},
    	computed:{
    		...mapState('cta',['loaded_data','current_item']),
    	}
  	}
</script>