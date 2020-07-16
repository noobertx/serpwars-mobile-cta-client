<template>
	<div class="settings-panel-content">
		<b-row v-if="loaded_data[current_item].content_visibility!='icon_only'">
			<b-col cols="4" sm="12">
				<label >Link Text </label>
			</b-col>
			<b-col cols="8" sm="12">
				<input type="text" class="serp-textfield browser-default" name="link_text" v-model="loaded_data[current_item].link_text">  
			</b-col>
			<b-col cols="8" sm="12" class="pt-2 pl-0">
				<b-form-checkbox
   				  id="checkbox-1"
   				  v-model="loaded_data[current_item].sub_text_enabled"
   				  name="checkbox-1"
   				  value="true"
   				  unchecked-value="false"
   				>
   				Enable Sub Text
   				</b-form-checkbox>
			</b-col>
		</b-row>

		<div  v-if="(loaded_data[current_item].sub_text_enabled=='true' && loaded_data[current_item].content_visibility!='icon_only')" class="pb-2 pt-2 pl-0 pr-0 border-top">
			
		<b-row>
			<b-col cols="4" sm="12">
				<label >Sub Text </label>
			</b-col>
			<b-col cols="8" sm="12">						
				<input type="text" class="serp-textfield browser-default" name="sub_text" v-model="loaded_data[current_item].sub_text">  
			</b-col>
		</b-row>
		</div>
		<b-row>
			<b-col cols="4" sm="12">
				<label >URL </label>
			</b-col>
			<b-col cols="8" sm="12">
				<input type="text" class="serp-textfield browser-default" name="link_path" v-model="loaded_data[current_item].link_path" title = "Insert tel:<phone number> to place a contact number\nInsert mailto:someone@example.com To send email">  
			</b-col>
		</b-row>
		<b-row v-if="loaded_data[current_item].content_visibility!='icon_only'">
			<b-col cols="12" sm="12">
				<input-size label="Text Size" :item="loaded_data[current_item].style.text" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
		<b-row v-if="loaded_data[current_item].content_visibility!='icon_only'" >
			<b-col cols="12" sm="12">
				<input-size label="Sub Size" :item="loaded_data[current_item].style.sub_text" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="3" sm="3" v-if="loaded_data[current_item].content_visibility!='icon_only'">
				<label >Text Color </label>
				 <simple-color-picker item="text" field="color" ></simple-color-picker>
			</b-col>
			<b-col cols="3" sm="3"  v-if="(loaded_data[current_item].sub_text_enabled=='true' && loaded_data[current_item].content_visibility!='icon_only')">
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
		<b-row v-if="(loaded_data[current_item].style.main.layout!='vertical') && (loaded_data[current_item].content_visibility !='icon_only') ">
			<b-col cols="12" sm="12">
				<b-form-group label="Text Position">
    				<b-form-radio-group
    					id="content-layout"
    					v-model="loaded_data[current_item].style.text.align"
    					:options="[
                		    { text: 'Left ', value: 'left' },
                		    { text: 'Center', value: 'center' },
                		    { text: 'Right', value: 'right' }
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
                		    { text: 'Left Icon', value: '' },
                		    { text: 'Top Icon', value: 'vertical' },
                		    { text: 'Right Icon', value: 'right-icon' }
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
		<b-row>
			<b-col cols="12" sm="12">
				<b-form-group label="Content Width">
    				<b-form-radio-group
    					id="content-alignment"
    					v-model="container.width"
    					:options="[
    						{ text: 'Custom', value: 'custom' },
    						{ text: 'Auto', value: 'auto' },
    						{ text: 'Min Content', value: 'min-content' },
    						{ text: 'Max Content', value: 'max-content' },
    						{ text: 'Fill Available', value: '-webkit-fill-available' }
    					]"
                  		button-variant="outline-primary"
    					buttons
    					name="radios-btn-default"
    				  ></b-form-radio-group>
    			</b-form-group>
			</b-col>
		</b-row>
		<b-row v-if="container.width=='custom'">
			<b-col cols="12" sm="12">
				<input-size label="Main Width" :item="container.cw" :max="320" :units="['px','em','rem','%']"></input-size>	
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
       			status:false
      		}
    	},
    	mounted(){
    	},
    	computed:{
			...mapState('cta',['loaded_data','current_item','container']),
			container:{
        		get () {
        		      return this.$store.state.cta.container
        		    },
        		set (value) {
        		   this.$store.commit('cta/updateContainer', value)
        		}
    		},
		},
    	components: {
      		InputSize,
      		SimpleColorPicker
    	},
  	}
</script>