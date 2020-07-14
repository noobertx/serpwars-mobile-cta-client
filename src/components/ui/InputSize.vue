<template>
	<div class="size-wrapper">
		<div class="row field_group pt-2 pb-2">
			<div class="col-3 mt-2">
				<label for="">
					{{label}}					
				</label>
			</div>
			<div class="col-6 mt-2">
				<b-form-input id="range-1" v-model="item.size" type="range"  :max="max" :step="getStep"></b-form-input>
			</div>		
			<div class="col-1 text-right mt-0 p-0">
				<input type="number"  v-model="item.size" :step="getStep" style="font-size: 0.6rem;padding: 7px 3px;border: 1px solid rgb(206, 212, 218);">				
			</div>
			<div class="col-2 p-0 pr-3">
				<b-form-select v-model="item.unit" :options="units" disabled-field="notEnabled"></b-form-select>				
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
			'max',
			'units'
		],
		data(){
			return {
				selected:"px"
			}
		},
		mounted(){
			// console.log(this.max);
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
		width:94%;
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