<template>
<div class="context-menu-wrap" @contextmenu=" openMenu" @click="hideContextMenu">
	<slot></slot>
	<div class="delete-wrap" v-if="displayMenu">
		<button @click="deleteItem"><i class="fa fa-times"></i>Delete</button>
	</div>
</div>
</template>
<script>
	export default{
		name:"ContextMenu",
		data:function(){
			return{
				visible:false
			}
		},
		props:["index"],
		mounted(){

		},
		computed:{
			displayMenu:function(){
				return (this.visible);
			}
		},
		methods:{
			deleteItem:function(){
				// console.log(this.index);
				this.$store.state.loaded_data.splice(this.index,1);
				this.$store.state.current_item= -1;

			},
			hideContextMenu:function(){
				this.visible=false;				
			},
			openMenu:function(e){
				e.preventDefault();
				var context= this;
				this.visible=true;

				setTimeout(function(){
					context.visible = false;
				},3000)
				// console.log("Open Menu");
			},
		}
	}
</script>
<style>
	.delete-wrap {
		position: absolute;
		bottom: 0;
		left: 0;
		/*display: none;*/
		z-index: 9999;
	}
	.context-menu-wrap {
		width: 100%;
		height: 100%;
	}
</style>