<template>
	<div class="serp-preview-wrap main-mockup" style="width: 100%;max-width: 626px;position: absolute;margin: 0px;padding: 0px;top: -130px;transform: scale(0.85);">
            <div class="serp-preview-screen" style=" max-width: 365px;width: 365px;">    
              <div class="serp-preview-content">
                <div class="serp-preview-content-wrap" style="text-align:center;  position: absolute;
    left: 34.9%;top:62px" >
                  <div class="serp-preview-content-area"> 
                  <div class="serp-preview-body" @elementSelected="test" style="width: 300px;margin: 0 auto;height: 519px;overflow: hidden;">
                      <div class="serp-preview-body-full-content"></div>
                    </div>
                  </div>          
                  <mobile-elements :loaded_data='loaded_data' :current_item="current_item" @ItemIndexSelected="setcurrentItem"></mobile-elements>
                </div>
              </div>                    
            </div>
          </div>
</template>
<script>
	import MobileElements from './MobileElements.vue'
	export default{
		props:[
			'loaded_data',
			'current_item'
		],
		components: {
    		MobileElements
  		},
		data(){
			return {
			}
		},
		mounted(){
			console.log(this);
		},
		methods:{
			test(){
    		},
    		setcurrentItem:function(e){
      			this.current_item = e;
    		},
		}
	}
	
</script>