<template>
	<div class="font-icon-picker-wrap">
		<div class="icon-select-preview">
			<i :class="getIcon"></i>
		</div>
		<div class="row field_group">
			<div class="col m3">
				<label for="">Icon</label>
			</div>
			<div class="col m9">
				<input class="icp iconpicker" v-model="$store.state.loaded_data[$store.state.current_item].icon" type="text" data-selected="fa-align-justify">			
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: "FontIconPicker",
		props:[
			'icon'
		],
		data(){
			return {

			}
		},
		computed:{
			getIcon(){
				var context = this;
				return context.$store.state.loaded_data[context.$store.state.current_item].icon
			}
		},
		mounted(){
			var context = this;
			(function($){
				$('.iconpicker').iconpicker({
					hideOnSelect: true
				});
				// $(".iconpicker").on("keyup",function(){
				// 	// context.$store.state.loaded_data[context.$store.state.current_item].icon = icon;
				// 	console.log(icon);
				// 	// $(context.$el).find(".icon-select-preview").html("<i class='"+icon+"'></i>");
				// })

				$(context.$el).on("click",".iconpicker-items i",function(){
					var icon = $(context.$el).find(".iconpicker").val()
					context.$store.commit('setIcon',icon);
					console.log(context.$store);
					$(context.$el).find(".iconpicker").trigger("keyup")

				})

			})(jQuery)
		}
	}
</script>
<style>
	.fa, .far, .fas {
    	font-family: "Font Awesome 5 Free"!important;
	}

	.icon-select-preview {
    	font-size: 43pt;
    	text-align: center;
	}

	input.iconpicker{
		width:100%;
		box-shadow: 0 0 0 transparent;
    	border-radius: 4px;
    	border: 1px solid #7e8993;
    	background-color: #fff;
    	color: #32373c;
    	padding-left: 10px;
	}
</style>