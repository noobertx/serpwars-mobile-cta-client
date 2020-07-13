<template>
	<div class="settings-panel-content">
		<b-row>
			<b-col cols="12" sm="12">
				<label for="border_display"> 
                	<input type="checkbox" name="display_border" id="display_border" true-value="true" false-value=""  v-model="$store.state.loaded_data[$store.state.current_item].style.border.enable"> Adjust Border
              	</label>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<label for="border_radius"> 
                    <input type="checkbox" name="display_border_radius" id="display_border_radius" true-value="true" false-value=""  v-model="$store.state.loaded_data[$store.state.current_item].style.border_radius.enable"> Adjust Border Radius
                </label>
			</b-col>
		</b-row>
		<b-row v-if="showBorder">
			<b-col cols="6" sm="12">
				<label>Size (px)</label>
                <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.border.size">
			</b-col>
			<b-col cols="6" sm="12">
				<label>Style</label>
                <select name="border_style"  class="browser-default" v-model="$store.state.loaded_data[$store.state.current_item].style.border.style">
					<option v-for="option in [
                    { text: 'Solid', value: 'solid' },
                    { text: 'Dotted', value: 'dotted' },
                    { text: 'Dashed', value: 'dashed' },
                    { text: 'Double', value: 'double' },
                    { text: 'Groove', value: 'groove' },
                    { text: 'Ridge', value: 'ridge' },
                    { text: 'Inset', value: 'inset' },
                    { text: 'Outset', value: 'outset' }
                  	]" v-bind:value="option.value" v-bind:key="option.text">{{ option.text }}</option>
            	</select>
			</b-col>
		</b-row>
		<b-row v-if="showBorder">
			<b-col cols="12" sm="12">
				<label>Color</label>
                <simple-color-picker item="border" field="color" ></simple-color-picker>
			</b-col>
		</b-row>
		<b-row v-if="showBorder">
			<b-col cols="12" sm="12">Enable Border</b-col>
		</b-row>
		<b-row v-if="showBorder">
			<b-col cols="6" sm="6">
				<label for="border_option"> 
                	<input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.sides.top"> Top
                </label>
			</b-col>
			<b-col cols="6" sm="6">
				<label for="border_option"> 
                <input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.sides.right"> Right
                </label>
			</b-col>
		</b-row>
		<b-row v-if="showBorder">
			<b-col cols="6" sm="6">
				<label for="border_option"> 
                <input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.sides.bottom">Bottom
                </label>
			</b-col>
			<b-col cols="6" sm="6">
				<label for="border_option"> 
                <input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.sides.left"> Left
                </label>
			</b-col>			
		</b-row>
		<b-row v-if="showBorderRadius">
			<b-col cols="12" sm="12">
				Border Radius
			</b-col>
		</b-row>
		<b-row v-if="showBorderRadius">
			<b-col cols="6" sm="6">
				<label>Top-Left (px)</label>
                <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.border_radius.top_left">
			</b-col>
			<b-col cols="6" sm="6">
				<label>Top-Right (px)</label>
				<input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.border_radius.top_right">
			</b-col>
		</b-row>
		<b-row v-if="showBorderRadius">
			<b-col cols="6" sm="6">
				<label>Bottom-Left (px)</label>
                <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.border_radius.bottom_left">
			</b-col>
			<b-col cols="6" sm="6">
				<label>Bottom-Right (px)</label>
				<input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.border_radius.bottom_right">
			</b-col>
		</b-row>
	</div>
</template>
<script>
	import SimpleColorPicker from '../ui/SimpleColorPicker.vue'
	export default {
		name:"BorderSettings",
    	data() {
      		return {
       
      		}
    	},
    	computed:{
    		showBorder(){
    		  var context = this;
    		  return (context.$store.state.loaded_data[context.$store.state.current_item].style.border.enable=="true");      
    		},
    		showBorderRadius(){
    		  var context = this;
    		  return (context.$store.state.loaded_data[context.$store.state.current_item].style.border_radius.enable=="true");      
    		},
    	},
    	components: {
      		SimpleColorPicker
    	},
  	}
</script>