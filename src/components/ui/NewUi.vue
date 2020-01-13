<template>
	<div>
	<h1>Hello World</h1>
		<input type="text">
	</div>
</template>
<script>
	export default{
		name : "NewUi",
		props:[
			'field'
		],
		data(){
			return {

			}
		},
		mounted(){
			console.log(this);
		}
	}
</script>