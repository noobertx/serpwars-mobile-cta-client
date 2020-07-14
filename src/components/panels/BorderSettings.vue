<template>
	<div class="settings-panel-content">
		<b-row>
			<b-col cols="12" sm="12">
				<label for="border_display"> 
                	<input type="checkbox" name="display_border" id="display_border" true-value="true" false-value=""  v-model="loaded_data[current_item].style.border.enable"> Adjust Border
              	</label>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<label for="border_radius"> 
                    <input type="checkbox" name="display_border_radius" id="display_border_radius" true-value="true" false-value=""  v-model="loaded_data[current_item].style.border_radius.enable"> Adjust Border Radius
                </label>
			</b-col>
		</b-row>
		<b-row v-if="showBorder">
			<b-col cols="6" sm="4">
				<label>Size (px)</label>
                <input type="number" class = "input_number" v-model="loaded_data[current_item].style.border.size">
			</b-col>
			<b-col cols="6" sm="4">
				<label>Style</label><br>
				<b-form-select v-model="loaded_data[current_item].style.border.style" :options="[
                    { text: 'Solid', value: 'solid' },
                    { text: 'Dotted', value: 'dotted' },
                    { text: 'Dashed', value: 'dashed' },
                    { text: 'Double', value: 'double' },
                    { text: 'Groove', value: 'groove' },
                    { text: 'Ridge', value: 'ridge' },
                    { text: 'Inset', value: 'inset' },
                    { text: 'Outset', value: 'outset' }
                  	]"></b-form-select>
			</b-col>
			<b-col cols="12" sm="4">
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
                	<input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="loaded_data[current_item].style.sides.top"> Top
                </label>
			</b-col>
			<b-col cols="6" sm="6">
				<label for="border_option"> 
                <input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="loaded_data[current_item].style.sides.right"> Right
                </label>
			</b-col>
		</b-row>
		<b-row v-if="showBorder">
			<b-col cols="6" sm="6">
				<label for="border_option"> 
                <input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="loaded_data[current_item].style.sides.bottom">Bottom
                </label>
			</b-col>
			<b-col cols="6" sm="6">
				<label for="border_option"> 
                <input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="loaded_data[current_item].style.sides.left"> Left
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
                <input type="number" class = "input_number" v-model="loaded_data[current_item].style.border_radius.top_left">
			</b-col>
			<b-col cols="6" sm="6">
				<label>Top-Right (px)</label>
				<input type="number" class = "input_number" v-model="loaded_data[current_item].style.border_radius.top_right">
			</b-col>
		</b-row>
		<b-row v-if="showBorderRadius">
			<b-col cols="6" sm="6">
				<label>Bottom-Left (px)</label>
                <input type="number" class = "input_number" v-model="loaded_data[current_item].style.border_radius.bottom_left">
			</b-col>
			<b-col cols="6" sm="6">
				<label>Bottom-Right (px)</label>
				<input type="number" class = "input_number" v-model="loaded_data[current_item].style.border_radius.bottom_right">
			</b-col>
		</b-row>
	</div>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
	import SimpleColorPicker from '../ui/SimpleColorPicker.vue'
	export default {
		name:"BorderSettings",
    	data() {
      		return {
       
      		}
    	},
    	computed:{
    		...mapState('cta',['loaded_data','current_item']),
    		showBorder(){
    		  var context = this;
    		  return (this.loaded_data[this.current_item].style.border.enable=="true");      
    		},
    		showBorderRadius(){
    		  var context = this;
    		  return (this.loaded_data[this.current_item].style.border_radius.enable=="true");      
    		},
    	},
    	components: {
      		SimpleColorPicker
    	},
  	}
</script>