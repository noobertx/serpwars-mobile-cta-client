<template>
	<div class="settings-panel-content">
		<b-row>
			<b-col cols="12" sm="12">
				<simple-icon-picker ></simple-icon-picker> 
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<input-size label="Icon Size" :item="$store.state.loaded_data[$store.state.current_item].style.icon" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<simple-color-picker item="text" field="color" ></simple-color-picker>
			</b-col>
		</b-row>
	</div>
</template>
<script>
	import SimpleIconPicker from '../ui/SimpleIconPicker.vue'
	import InputSize from '../ui/InputSize.vue'	
	import SimpleColorPicker from '../ui/SimpleColorPicker.vue'
	export default {
		name:"IconSettings",
    	data() {
      		return {
       
      		}
    	},
    	components: {
      		SimpleIconPicker,
      		InputSize,
      		SimpleColorPicker
    	},
  	}
</script>