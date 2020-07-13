<template>
	<div class="settings-panel-content">
		<b-row>
			<b-col cols="12" sm="12">
				<label for="auto_width">                    
                	<input type="checkbox" name="auto_width" id="auto_width" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.main.adjust_width"> Adjust the Width
                </label>
                <label for="auto_height">                    
                	<input type="checkbox" name="auto_height" id="auto_height" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.main.adjust_height"> Adjust Height
               	</label>
			</b-col>
		</b-row>
		<b-row  v-if="showRangeWidth">
			<b-col cols="12" sm="12">
				<input-size label="Width" :item="$store.state.loaded_data[$store.state.current_item].style.main.width" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
		<b-row v-if="showRangeHeight">
			<b-col cols="12" sm="12">
				<input-size label="Height" :item="$store.state.loaded_data[$store.state.current_item].style.main.height" :units="['px','em','rem','%']"></input-size>
			</b-col>
		</b-row>
	</div>
</template>
<script>
	import InputSize from '../ui/InputSize.vue'	
	export default {
		name:"SizeSettings",
    	data() {
      		return {
       
      		}
    	},
    	computed:{
    		showRangeWidth(){
      var context = this;
        return (context.$store.state.loaded_data[context.$store.state.current_item].style.main.adjust_width=="true");      
    },
    showRangeHeight(){
      var context = this;
        return (context.$store.state.loaded_data[context.$store.state.current_item].style.main.adjust_height=="true");      
    },
    	},
    	components: {
      		InputSize
    	},
  	}
</script>