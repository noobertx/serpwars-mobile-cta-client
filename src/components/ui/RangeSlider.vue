/* eslint-disable no-alert */
<template>
	<div class="slidecontainer field_group">
		<label>{{label}}</label>
		<div class="row">
			<div class="col m9">
				<input type="range" :min="min" :max="max" :value="getRangeValues" class="slider" id="myRange">				
			</div>
			<div class="col m3">
				<input type="number" id="demo" :value="getRangeValues">
			</div>
		</div>
	</div>
</template>
<script>
	import JQuery from 'jquery'
	let $ = JQuery
	export default{
		name:"RangeSlider",
		props:[
			'min',
			'max',
			'step',
			'item',
			'field',
			'label'
		],
		data(){
			return {

			}
		},
		computed:{
			getRangeValues:function(){
				var context = this;
				$(".slider").trigger("keyup");
				return context.$store.state.loaded_data[context.$store.state.current_item].style[context.item][context.field]
			}
		},
		mounted:function(){
			var context =this;
			this.value = context.$store.state.loaded_data[context.$store.state.current_item].style[context.item][context.field];

			var slider = $(context.$el).find("#myRange")[0];
			var output = $(context.$el).find("#demo")[0];
			this.value = slider.value; // Display the default slider value
			
			$(output).on("change",function(e){
				e.preventDefault();
				context.value = $(this).val();
				var params = {
					item:context.item,
					field:context.field,
					value:context.value ,
				}
				context.$store.commit("adjustWidth",params);
				console.log("Item pressed");
			})
			// Update the current slider value (each time you drag the slider handle)
			slider.oninput = function() {
			output.value = this.value;
			var params = {
                	item:context.item,
                	field:context.field,
                	value:output.value ,
              	}
              	context.$store.commit("adjustWidth",params);
			}
		}
	}
</script>
<style>
.slidecontainer {
  width: 100%; /* Width of the outside container */
}
.slidecontainer input[type='number'] {
	width: 100%;
	text-align: center;
}
.slidecontainer .slider {
    height: 10px;
}
/* The slider itself */
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
  
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */ 
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #47a3da; /* Green background */
  border-radius: 100px;
  cursor: pointer; /* Cursor on hover */
  
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #47a3da; /* Green background */
  border-radius: 100px;  
  cursor: pointer; /* Cursor on hover */
}
</style>