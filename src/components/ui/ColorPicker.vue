/* eslint-disable no-alert */
<template>
		<div class="form-group">
      <input type="text"  class="form-control demo" data-opacity="1" v-model="$store.state.loaded_data[$store.state.current_item].style[item][field]" @blur="detectChange">
    </div>
</template>
<script>
  import JQuery from 'jquery'
let $ = JQuery
	export default{
		name:"RangeSlider",
		props:[
			'item',
      'field'
		],
		data(){
			return {
        val:"",
        index:-1
			}
		},

    computed:{
      getColorValues(){
        var context = this;
        $(".demo").trigger("keyup");
        return context.$store.state.loaded_data[context.$store.state.current_item].style[context.item][context.field]
      }
    },
		mounted:function(){
     this.initMiniColors();
		},
    methods:{
      refreshColors(){
        var context = this;
        $(this.$el).find(".demo").val(context.$store.state.loaded_data[context.$store.state.current_item].style[context.item][context.field])
      },
      detectChange(){
        var context = this;
        $(context.$el).find(".demo").trigger("keyup");
      },
      getColor:function(){
        var context = this;

        return context.$store.state.loaded_data[context.$store.state.current_item].style[context.item][context.field]
      },
      initMiniColors:function(){
         var context = this;
      // $(this.$el).find(".demo").val(context.$store.state.loaded_data[context.$store.state.current_item].style[context.item][context.field])
     

      
      $(this.$el).find(".demo").minicolors({
          control: $(this).attr('data-control') || 'hue',
          defaultValue: $(this).attr('data-defaultValue') || '',
          format: $(this).attr('data-format') || 'hex',
          keywords: $(this).attr('data-keywords') || '',
          inline: $(this).attr('data-inline') === 'true',
          letterCase: $(this).attr('data-letterCase') || 'lowercase',
          opacity: $(this).attr('data-opacity'),
          position: $(this).attr('data-position') || 'bottom',
          swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
          change: function(value) {
            if( !value ) return;
            // if( opacity ) value += ', ' + opacity;
            if( typeof console === 'object' ) {
               if(context.index==context.$store.state.current_item){
                 var params = {
                    item:context.item,
                    field:context.field,
                    value:value,
                  }

              context.$store.commit("setColor",params);
              }
              context.index = context.$store.state.current_item;
            }
          },
          theme: 'bootstrap'
        });
      }
    }
	}

</script>
<style>
	.minicolors-theme-bootstrap .minicolors-swatch{
		height: 32px!important;
    width: 32px!important;
    border-radius:200px!important;
	}
  input.minicolors-input {
    text-indent: 40px;
  }
</style>