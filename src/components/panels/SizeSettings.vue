<template>
	<div class="settings-panel-content">
		<b-row>
			<b-col cols="6" sm="6">
				<label for="auto_width">                    
                	<input type="checkbox" name="auto_width" id="auto_width" true-value="true" false-value="" v-model="loaded_data[current_item].style.main.adjust_width"> Adjust the Width
                </label>
			</b-col>
      <b-col cols="6" sm="6">
                <label for="auto_height">                    
                	<input type="checkbox" name="auto_height" id="auto_height" true-value="true" false-value="" v-model="loaded_data[current_item].style.main.adjust_height"> Adjust Height
               	</label>
      </b-col>
		</b-row>
		<b-row  v-if="showRangeWidth">
			<b-col cols="12" sm="12">
				<input-size label="Width" :item="loaded_data[current_item].style.main.width" :max="320" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
		<b-row v-if="showRangeHeight">
			<b-col cols="12" sm="12">
				<input-size label="Height" :item="loaded_data[current_item].style.main.height" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
	</div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
	import InputSize from '../ui/InputSize.vue'	
	export default {
		name:"SizeSettings",
    	data() {
      		return {
       
      		}
    	},
    	computed:{
        ...mapState('cta',['loaded_data','current_item']),
    		showRangeWidth(){
    		  var context = this;
    		    return (this.loaded_data[this.current_item].style.main.adjust_width=="true");      
    		},
    		showRangeHeight(){
    		  var context = this;
    		    return (this.loaded_data[this.current_item].style.main.adjust_height=="true");      
    		},
    	},
    	components: {
      		InputSize
    	},
  	}
</script>