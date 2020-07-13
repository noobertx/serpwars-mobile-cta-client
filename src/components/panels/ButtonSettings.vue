<template>
	<div class="settings-panel-content">
		<b-row>
			<b-col cols="4" sm="12">
				<label >Link Text </label>
			</b-col>
			<b-col cols="8" sm="12">
				<input type="text" class="serp-textfield browser-default" name="link_text" v-model="$store.state.loaded_data[$store.state.current_item].link_text">  
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="4" sm="12">
				<label >URL </label>
			</b-col>
			<b-col cols="8" sm="12">
				<input type="text" class="serp-textfield browser-default" name="link_path" v-model="$store.state.loaded_data[$store.state.current_item].link_path">  
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<input-size label="Text Size" :item="$store.state.loaded_data[$store.state.current_item].style.text" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="4" sm="4">
				<label >Text Color </label>
				 <simple-color-picker item="text" field="color" ></simple-color-picker>
			</b-col>
			<b-col cols="4" sm="4">
				<label >Background</label>
				<simple-color-picker item="main" field="background" ></simple-color-picker>
			</b-col>
			<b-col cols="4" sm="4">
				<label >Icon</label>
				<simple-color-picker item="icon" field="color" ></simple-color-picker>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<b-form-group label="Content Visibility">
    				<b-form-radio-group
    					id="content-visibility"
    					v-model="$store.state.loaded_data[$store.state.current_item].content_visibility"
    					:options="[
                    		{ text: 'Show All', value: '' },
                    		{ text: 'Show Text Only', value: 'text_only' },
                    		{ text: 'Show Icon Only', value: 'icon_only' }
                  		]"
                  		button-variant="outline-primary"
    					buttons
    					name="radios-btn-default"
    				  ></b-form-radio-group>
    			</b-form-group>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<b-form-group label="Content Layout">
    				<b-form-radio-group
    					id="content-layout"
    					v-model="$store.state.loaded_data[$store.state.current_item].style.main.layout"
    					:options="[
                		    { text: 'Side Icon', value: '' },
                		    { text: 'Top Icon', value: 'vertical' }
                		]"
                  		button-variant="outline-primary"
    					buttons
    					name="radios-btn-default"
    				  ></b-form-radio-group>
    			</b-form-group>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<b-form-group label="Content Alignment">
    				<b-form-radio-group
    					id="content-alignment"
    					v-model="$store.state.container.layout"
    					:options="[
    						{ text: 'Left', value: 'start' },
    						{ text: ' Center', value: 'center' },
    						{ text: ' Right', value: 'right' },
    						{ text: 'Space Around', value: 'space_around' },
    						{ text: ' Space in Between', value: 'space_between' },
    						{ text: ' Space Evenly', value: 'space_evenly' }
    					]"
                  		button-variant="outline-primary"
    					buttons
    					name="radios-btn-default"
    				  ></b-form-radio-group>
    			</b-form-group>
			</b-col>
		</b-row>
		<b-row v-if="$store.state.container.width=='custom'">
			<b-col cols="12" sm="12">
				<input-size label="Width" :item="$store.state.container.cw" :max="320" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<input-size label="Text Size" :item="$store.state.loaded_data[$store.state.current_item].style.text" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
	</div>
</template>
<script>
	import InputSize from '../ui/InputSize.vue'	
	import SimpleColorPicker from '../ui/SimpleColorPicker.vue'
	export default {
		name:"ButtonSettings",
    	data() {
      		return {
       
      		}
    	},
    	components: {
      		InputSize,
      		SimpleColorPicker
    	},
  	}
</script>