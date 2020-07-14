<template>
	<div class="settings-panel-content">
		<b-row>
			<b-col cols="4" sm="12">
				<label >Link Text </label>
			</b-col>
			<b-col cols="8" sm="12">
				<input type="text" class="serp-textfield browser-default" name="link_text" v-model="loaded_data[current_item].link_text">  
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="4" sm="12">
				<label >Sub Text </label>
			</b-col>
			<b-col cols="8" sm="12">						
				<input type="text" class="serp-textfield browser-default" name="sub_text" v-model="loaded_data[current_item].sub_text">  
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="4" sm="12">
				<label >URL </label>
			</b-col>
			<b-col cols="8" sm="12">
				<input type="text" class="serp-textfield browser-default" name="link_path" v-model="loaded_data[current_item].link_path">  
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<input-size label="Text Size" :item="loaded_data[current_item].style.text" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<input-size label="Sub Size" :item="loaded_data[current_item].style.sub_text" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="3" sm="3">
				<label >Text Color </label>
				 <simple-color-picker item="text" field="color" ></simple-color-picker>
			</b-col>
			<b-col cols="3" sm="3">
				<label >Sub Text Color </label>
				 <simple-color-picker item="sub_text" field="color" ></simple-color-picker>
			</b-col>
			<b-col cols="3" sm="3">
				<label >Background</label>
				<simple-color-picker item="main" field="background" ></simple-color-picker>
			</b-col>
			<b-col cols="3" sm="3">
				<label >Icon</label>
				<simple-color-picker item="icon" field="color" ></simple-color-picker>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<b-form-group label="Content Visibility">
    				<b-form-radio-group
    					id="content-visibility"
    					v-model="loaded_data[current_item].content_visibility"
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
    					v-model="loaded_data[current_item].style.main.layout"
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
    					v-model="container.layout"
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
		<b-row >
			<b-col cols="12" sm="12">
				<input-size label="Main Width" :item="container.cw" :max="320" :units="['px','em','rem','%']"></input-size>	
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" sm="12">
				<input-size label="Text Size" :item="loaded_data[current_item].style.text" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
	</div>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
	import InputSize from '../ui/InputSize.vue'	
	import SimpleColorPicker from '../ui/SimpleColorPicker.vue'
	export default {
		name:"ButtonSettings",
    	data() {
      		return {
       
      		}
    	},
    	mounted(){
    	},
    	computed:{
			...mapState('cta',['loaded_data','current_item','container'])
		},
    	components: {
      		InputSize,
      		SimpleColorPicker
    	},
  	}
</script>