<template>
	<div class="serp-preview-wrap main-mockup">
            <div class="serp-preview-screen">    
              <div class="serp-preview-content">
                <div class="serp-preview-content-wrap">
                  <div class="serp-preview-content-area"> 
                  <div class="serp-preview-body" @elementSelected="test">
                      <div class="serp-preview-body-full-content"></div>
                    </div>
                  </div>          
                  <mobile-elements  @ItemIndexSelected="setcurrentItem"></mobile-elements>
                </div>
              </div>                    
            </div>
          </div>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
	import MobileElements from './MobileElements.vue'
	export default{
		components: {
    		MobileElements
  		},
		data(){
			return {
			}
		},
		mounted(){
		},
		computed:{
			...mapState('cta',['loaded_data','current_item'])
		},
		methods:{
			test(){
    		},
    		setcurrentItem:function(e){
    			console.log(e);
      			this.current_item = e;
    		},
		}
	}
	
</script>
<style>
  .serp-preview-wrap.main-mockup{
    width: 100%;
    max-width: 626px;
    position: absolute;
    margin: 0px;
    padding: 0px;
    top: -100px;    
  }
  .serp-preview-screen{
    max-width: 365px;
    width: 365px;
  }
  .serp-preview-content-wrap{
    text-align:center;
    position: absolute;
    left: 36.5%;
    top:62px
  }
  .serp-preview-body{
    width: 320px;
    margin: 0 auto;
    height: 528px;
    overflow: hidden;
  }
</style>