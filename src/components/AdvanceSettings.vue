<template>
	<div role="tablist">
		<b-card no-body class="mb-1">
    	  <b-card-header header-tag="header" class="p-1" role="tab">
    	    <b-button block v-b-toggle.accordion-9 variant="info">Display</b-button>
    	  </b-card-header>
    	  <b-collapse id="accordion-9" visible accordion="my-accordion" role="tabpanel">
    	    <b-card-body>
    	      <!-- <button-settings></button-settings> -->
    	      <exclusive-page-settings></exclusive-page-settings>
    	    </b-card-body>
    	  </b-collapse>
    	</b-card>
    	<b-card no-body class="mb-1">
    	  <b-card-header header-tag="header" class="p-1" role="tab">
    	    <b-button block v-b-toggle.accordion-10 variant="info">Google Tag Manager</b-button>
    	  </b-card-header>
    	  <b-collapse id="accordion-10" visible accordion="my-accordion" role="tabpanel">
    	    <b-card-body>
				<tag-manager-settings></tag-manager-settings>
    	    </b-card-body>
    	  </b-collapse>
    	</b-card>
	</div>
</template>
<script>
	import ExclusivePageSettings from './panels/ExclusivePageSettings.vue'
	import TagManagerSettings from './panels/TagManagerSettings.vue'
  export default {
  	name:"AdvanceSettings",
    data() {
      return {
       
      }
    },
    computed:{
    	displayExclusivePage(){
      		return (this.$store.state.loaded_data[this.$store.state.current_item].exclusive_page=="true");      
    	}
    },
    components: {
    	ExclusivePageSettings,
    	TagManagerSettings
    },
  }
</script>