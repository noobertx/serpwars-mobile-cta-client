<template>
	<div class="container-option-wrap">
    <div class="ca-content-alignment field_group row " >          
           <label for="" class="col m6">Content Layout</label>  
            <div class="col m6">              
              <select name="layout" class="browser-default"  v-model="$store.state.container.layout" >
                <option disabled value="left">Please select one</option>
                <option v-for="option in [
      { text: 'Left', value: 'start' },
      { text: ' Center', value: 'center' },
      { text: ' Right', value: 'right' },
      { text: 'Space Around', value: 'space_around' },
      { text: ' Space in Between', value: 'space_between' },
      { text: ' Space Evenly', value: 'space_evenly' }
    ]" v-bind:value="option.value" v-html="option.text" v-bind:key="option.text">{{ option.text }}</option>
                </select>
              </div>
            </div>
<div class="container_width field_group row ">          
  <label for="" class="col m6">Content Width</label> 
    <select name="layout" class="browser-default"  v-model="$store.state.container.width" >
      <option v-for="option in [
        { text: ' Custom', value: 'custom' },
        { text: 'Auto', value: 'auto' },
        { text: ' Min Content', value: 'min-content' },
        { text: ' Max Content', value: 'max-content' },
        { text: 'Fill Space Available', value: '-webkit-fill-available' }      
    ]" v-bind:value="option.value" v-html="option.text" v-bind:key="option.text">{{ option.text }}</option>
    </select>
    <div v-if="$store.state.container.width=='custom'" class="row field_group">
      <div class="col m12">                		
        <input-size label="Width" :item="$store.state.container.cw" :units="['px','em','rem','%']"></input-size>
      </div>
    </div>
</div>
            <div class="row field_group">
              <div class="col m12">                
                <h5>Google Tag Manager</h5>
              </div>
            </div>
            <div class="row field_group">
              <label class="col m3">
                Category 
              </label>
              <span class="col m9">                    
                <input type="text" class="serp-textfield browser-default" name="button_text" v-model="$store.state.container.gtm.category">
              </span>
            </div>
	</div>
</template>
<script>
	import InputSize from './ui/InputSize.vue'

	export default{
		name:"ContainerOptions",
		components: {
			InputSize
		}
	}
</script>
<style scope>
	.container-option-wrap{
		padding: 10px;
	}
</style>