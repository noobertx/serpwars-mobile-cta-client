/* eslint-disable no-alert */
<template>
  <div id="app" class="container"> 
    <div class="mobile-cta-app-wrap" v-if="!isLoaded">
      <div class="loading-icon">
        <i class="fas fa-circle-notch fa-spin"></i>        
      </div>
    </div>
    <div class="mobile-cta-app-wrap" v-if="isLoaded">
    <div class="row bg-primary text-light p-3">
       <b-col cols="12" sm="12">
          <div class="app-title">CTA Name</div>
          <input type="text" v-model="title" class="serp-textfield browser-default" style="width:42%">
      </b-col>
    </div>


    <div class="row " >
      
    </div>

    <div class="row">
      <!-- <a href="#" class="btn red white-text" @click="deleteElement" v-show="showDelete"><i class="fa fa-times"></i> Delete This Element</a> -->

    </div>
    <div class="row"  >
    <!-- <div class="row" @elementSelected="test" > -->

      <div class="col-md-6 " id = "serp-settings-wrap">       
      <div style="background:#fff;" class="pt-5">
        <element-select-dropdown></element-select-dropdown>
         <container-presets></container-presets>   
      </div>
      <div style="clear:both"></div>  
        <b-tabs content-class="mt-3">
          <b-tab title="CONTENT" active>
            <content-settings></content-settings>            
          </b-tab>
          <b-tab title="ADVANCE">
            <advance-settings></advance-settings>
          </b-tab>
        </b-tabs>
        <b-row>
          <b-col cols="12" sm="12">
            <a href="#" class="btn blue btn-block save_btn" @click="savingData" :class="{ disabled: isSaving }"><i class="fa fa-save"></i> Save Changes</a>
          </b-col>
        </b-row>          
      </div>

      <div class="col m7 " style="    display: flex;    justify-content: flex-end;">
          <preview></preview>
      </div>
    </div>  
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ContainerPresets from './components/ContainerPresets.vue'
import NavBar from './components/NavBar.vue'
import ElementSelectDropdown from './components/ui/ElementSelectDropdown.vue'
import ContentSettings from './components/ContentSettings.vue'
import AdvanceSettings from './components/AdvanceSettings.vue'
import Preview from './components/Preview.vue'

export default {
  name: 'app',
  data:function(){
    return {
     isSaving:false,    
     id:appvar.id,
     ajaxurl:ajaxurl
    }
  },
  components: {
    ContainerPresets,
    ContentSettings,
    AdvanceSettings,
    Preview,
    ElementSelectDropdown,
  },
  created(){
    this.loaded_data = [];
    this.container= JSON.parse('{"class":"","id":"","layout":"start","gtm":{"category":""},"width":"auto","cw":{"size":100,"unit":"%"}}');


    this.current_item = 0; 
  },
  computed:{
    ...mapState('cta',['title','loaded_data','current_item','container','isLoaded']),
    getLinkText(){
      var context = this;
        return this.loaded_data[this.current_item].link_text
    },
    showDelete:function(){
      return (this.loaded_data.length>0);
    },
    title:{
        get () {
              return this.$store.state.cta.title
            },
        set (value) {
           this.$store.commit('cta/updateTitle', value)
        }
    },
    container:{
        get () {
              return this.$store.state.cta.container
            },
        set (value) {
           this.$store.commit('cta/updateContainer', value)
        }
    },
    loaded_data:{
        get () {
              return this.$store.state.cta.loaded_data
            },
        set (value) {
           this.$store.commit('cta/updateLoadedData', value)
        }
    },
    current_item:{
        get () {
              return this.$store.state.cta.current_item
            },
        set (value) {
           this.$store.commit('cta/setCurrentItem', value)
        }
    },
  },
  mounted(){
        this.setData({id:this.id,ajaxurl:this.ajaxurl});
        this.loadData();
  },
  methods:{
    ...mapActions('cta',[
      'setData',
      'loadData',
      'savingData',
      'deleteElement'
      ])  
  }
}
</script>

<style>
  #app .light-blue.accent-3{
    background-color: #4284f4!important;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 25px;
  background: #eee;
}
.container {
    width: 100%!important;
    margin: 0 auto 0 0;
}
.loading-icon {
    text-align: center;
    font-size: 6em;
    margin-top: 200px;
    color: #3e2c50;
}
.save_btn{
    padding: 10px;
    height: auto;
    font-size: 1.2em;
}

.serpwars-header{
  background:#000;
  text-align: center;
  margin: 40px 0;
  width:320px;
  height:62px;
  background-image:url("./assets/rsz_serpwars-logo.png");
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.serp-preview-body-full-content{
    background-image:url("./assets/mock-bg.png");
    height: 100%;
    margin-top: 60px;
    margin-left: 5px;
}
.ca_submenu {
    display: none;
    position: absolute;
    background: #fff;
    top: 35px;
    width: 385px;
    z-index: 999;
    border: 1px solid #ccc;
}
.ca_nav-wrap>ul>li {
    margin: 0 5px 0 0;
    display: inline-block;
}
.ca_nav-wrap>ul>li>a {
    float: left;
    display: block;
    font-size: 12px;
}

.ca_nav-wrap>ul>li {
    position: relative;
}

.ca_nav-wrap>ul>li:hover .ca_submenu{

    display: block;
}
.ca_nav-wrap a:hover {
    /*background: #fff!important;*/
    color: #fff!important;

}

.preset-selector a,.preset-selector a:hover{
  color: #039be5!important;
}
ul.element-selector a:hover {
    background: #4284f4!important;
    color: #fff!important;
}
.dropdown-container {
    display: inline-block;
    margin-right: 10px;
}
  div#mytabs .tabs {
    box-shadow: none;
}
  .tinytabs .tabs {
  margin-left: 0px;
  display: flex;
  flex-flow: row wrap;
}
.tinytabs .tabs .tab .close {
  padding-left: 5px;
}
.tinytabs .tabs .tab {
  margin: 0 3px 0 0;
  background: #e1e1e1;
  display: block;
  padding: 6px 15px;
  text-decoration: none;
  color: #666;
  font-weight: bold;
  border-radius: 3px 3px 0 0;
}
.tinytabs .section {
  background: #f1f1f1;
  overflow: hidden;
  padding: 15px 0;
  clear: both;
  border-radius: 3px;
}
.tinytabs .tab.sel {
  background: #f1f1f1;
  color: #333;
  text-shadow: none;
}
  
  .main-mockup{
     background-image:url("./assets/27709270-21.png");
    background-size: 68.2% 100%;
    /* height: 650px; */
    background-position-x: 100%;
    background-position-y: -3%;
    background-repeat: no-repeat;
  }
  .serp-preview-wrap{
    max-width: 420px; position: fixed;
  }
  .serp-preview-content{
   
    height: 700px;
  }
  .input_number{
    max-width: 100%;
    padding:  5px 10px;
  }
  .field_group label{
    padding:  5px ;
    display: block;
    font-size: 11px;
    font-weight: bold;
    line-height: 28px;
    color: #333;
  }
  .preset-selector{
    width:100%;
  }
  .preset-selector ul{
    list-style: none;
  }
  .preset-selector ul li:nth-child(1) .imgwrap{
    background:url("././assets/01.jpg");;
  }
    .preset-selector ul li:nth-child(2) .imgwrap{
    background:url("././assets/02.jpg");;
  }
    .preset-selector ul li:nth-child(3) .imgwrap{
    background:url("././assets/03.jpg");;
  }
    .preset-selector ul li:nth-child(4) .imgwrap{
    background:url("././assets/04.jpg");;
  }
    .preset-selector ul li:nth-child(5) .imgwrap{
    background:url("././assets/05.jpg");;
  }
    .preset-selector ul li:nth-child(6) .imgwrap{
    background:url("././assets/06.jpg");;
  }
    .preset-selector ul li:nth-child(7) .imgwrap{
    background:url("././assets/07.jpg");;
  }
  .preset-selector ul {
    width: 100%;
    padding: 0;
  }
  header[role='tab']  .btn-info {
    background-color: #4184F4;
    border:1px solid #4184F4;
}

header[role='tab'] .btn-info:hover {
    background-color: #4157f4;
}
  select.button_type{
    width: 100%!important;
  }
  .field_group .row {
    margin-bottom: 0;
  }
  .field_group .row {
    margin-bottom: 0;
}

.form-group {
    display: inline;
    float: left;
}

input.serp-textfield browser-default,.form-group .minicolors-input {
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.serp-textfield {
    width: 100%;
    border: 1px solid #ced4da;
    padding: 6px 14px;
    border-radius: 5px;
    font-size: 1rem;
}

.field_group .form-group {
    width: 100%;
}
.app-title {
    font-size: 21px;
    font-weight: bold;
    padding-bottom: 10px;
}


a.tab.sel {
    color: #fff;
    background: #333;
    border-radius: 5px 5px;
}

nav.tabs {
    padding: 0 10px;
}
  .tabs{
    margin-top:30px;

  }
  .tinytabs .tabs .tab{
    font-size: 12px;
    padding:5px;
    line-height: 20px;
      height: 31px;
  }

  .blue {
     background-color: #4184F4 !important;
    }

 [type="checkbox"]:not(:checked), [type="checkbox"]:checked {
    position: relative!important;
    opacity: 1!important;
    pointer-events: auto!important;
}

.serp-preview-body>p {
    padding: 0 5px
      .serp-preview-body-full-content;
}

a.btn.blue.btn-block.save_btn:hover {
    color: #fff;
}

#serp-settings-wrap{
  padding: 0;
  background:#fff;
  height: 78vh;
  overflow: hidden;
  z-index:1;
  overflow-y: scroll;
}

.form-group legend,label,.field_group label {
    font-size: 12px;
    font-weight: 700;
    color: #555;
}

.serp-color-picker{
    border-radius: 5px!important;
    /*overflow:hidden;*/
}


.btn-group-toggle span {
    font-size: 10px;
}

.settings-panel-content>.row {
    border: 1px solid #ddd;
    border-bottom: none;
    padding-bottom: 20px;
    padding-top: 10px;
    border-left: none;
    border-right: none;
}

.settings-panel-content>.row:last-child {
    border-bottom: 1px solid #ddd;
}
.wp-core-ui select {
    font-size: 0.7em!important;
    height: 35px!important;
}
#serp-settings-wrap .card {
    padding: 0!important;
    margin: 0!important;
}
.serp-button-collections a {
    text-decoration: none!important;
}
</style>
