<template>
	<div class="size-wrapper">
		<div class="row field_group">
			<div class="col m4">
				<label for="">
					{{label}}					
				</label>
			</div>
			<div class="col m3">
				<input type="number"  v-model="item.size" :step="getStep">
			</div>		
			<div class="col m5">

				<select name="selected" v-model="item.unit" class="unit-selector browser-default">
					<option v-for="unit in units" v-bind:value="unit" v-html="unit" v-bind:key="unit">{{ unit }}</option>	
				</select>
			</div>		
		</div>
	</div>
</template>
<script>
	export default{
		name:"InputSize",
		props:[
			'label',
			'item',
			'units'
		],
		data(){
			return {
				selected:"px"
			}
		},
		mounted(){

		},
		computed:{
			getStep(){
				if(this.item.unit=="em" || this.item.unit=="rem"){
					return 0.1;
				}else{
					return 1;
				}
			}
		}
	}

</script>
<style scope>
	.field_group input[type="number"]{
		width:100%;
		box-shadow: 0 0 0 transparent;
    	border-radius: 4px;
    	border: 1px solid #7e8993;
    	background-color: #fff;
    	color: #32373c;
    	padding-left: 10px;
	}
	.field_group label{
		display: inline!important;
	}
	.row.field_group{
		margin-bottom: 10px;
	}
</style>