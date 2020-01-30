/* eslint-disable no-alert */
<template>
  <div id="app" class="container" :mydata="element_id">
      <!-- <button @click="fetchStoreData">Create Presets</button> -->
    
    <div class="mobile-cta-app-wrap" v-if="!isLoaded">
      <div class="loading-icon">
        <i class="fas fa-circle-notch fa-spin"></i>        
      </div>
    </div>
    <div class="mobile-cta-app-wrap" v-if="isLoaded">
      <div class="app-title">Button Name</div>
      <input type="text" v-model="$store.state.title" class="serp-textfield browser-default" style="width:42%">



  
    <div class="row">
       <container-presets></container-presets>   
    </div>
    <div class="row">
      <!-- <element-select-dropdown :loaded_data='loaded_data'></element-select-dropdown> -->
      <!-- <a href="#" class="btn red white-text" @click="deleteElement" v-show="showDelete"><i class="fa fa-times"></i> Delete This Element</a> -->

    </div>
    <div class="row" @elementSelected="test" >
      <div class="col m5 " id = "serp-settings-wrap">
         

               <vue-tiny-tabs id="mytabs" :anchor="false" :closable="false" :hideTitle="true"  v-if="$store.state.loaded_data.length>0 && $store.state.current_item!=-1">
          <div class="section" id="component">
             <h3 class="title">Content</h3>
            <div class="settings">
                  <div class="row" style="display: none;">
                    <div class="col m12">
                               <div class="ca-button-type field_group" >          
           <label for="">Type</label>  
          <select name="button_type" class="button-type browser-default"  style = "width: 100%; padding: 5px 10px;" v-model="$store.state.loaded_data[$store.state.current_item].type">
             <option v-for="option in [
      { text: '<i class=\'fa fa-cog\'></i>  Custom button', value: 'custom' }
    ]" v-bind:value="option.value" v-html="option.text" v-bind:key="option.value">{{ option.text }}</option>
           </select>
<!-- 
           <color-picker item="main" field="background"></color-picker> -->
        </div> 
                    </div>
                  </div>

              <accordion title="Buttons">
                <div class="accordion-content">
                  <div class="row field_group">
                    <div class="col m4">
                        <label >Link Text </label>
                    </div>                  
                    <div class="col m8">                      
                      <input type="text" class="serp-textfield browser-default" name="button_text" v-model="$store.state.loaded_data[$store.state.current_item].link_text">                    
                    </div>
                  </div>
                  <div class="row field_group">
                    <div class="col m4">
                      <label > URL</label>
                    </div>
                    <div class="col m8">
                      <input type="text" class="serp-textfield browser-default" name="button_text" v-model="$store.state.loaded_data[$store.state.current_item].link_path">
                    </div>
                  </div>
                  <div class="row">
                      <div class="col m12">
                        <input-size label="Text Size" :item="$store.state.loaded_data[$store.state.current_item].style.text" :units="['px','em','rem','%']"></input-size>
                      </div>
                  </div>
                  <div class="row field_group">
                    <div class="col m4">                      
                      <label>Text Color</label>
                    </div>
                    <div class="col m8">
                      <simple-color-picker item="text" field="color" ></simple-color-picker>
                    </div> 
                  </div>

                  <div class="row field_group">
                    <div class="col m4">                      
                      <label>Background</label>
                    </div>                    
                    <div class="col m8">
                      <simple-color-picker item="main" field="background" ></simple-color-picker>
                    </div>                                       
                  </div>


                </div>
                <div class="accordion-content">
                  <div class="row">
                    <div class="col m12">
                      
 
  </div>
  </div>
                <div class="row ca-content-visibility field_group">
                  <div class="col m4">       
                     <label for="">Content Visibility</label>  
                  </div>
                  <div class="col m8">       
                        <select name="content_visibility" class="browser-default"  v-model="$store.state.loaded_data[$store.state.current_item].content_visibility">
                           <option v-for="option in [
                    { text: 'Show All', value: '' },
                    { text: 'Show Text Only', value: 'text_only' },
                    { text: 'Show Icon Only', value: 'icon_only' }
                  ]" v-bind:value="option.value" v-bind:key="option.text">{{ option.text }}</option>
                         </select>
                      
                  </div>
                </div>

                <div class="row ca-content-visibility field_group">
                  <div class="col m4">     
                     <label for="">Content Layout</label>  
                  </div>
                  <div class="col m8">     
                        <select name="content_layout"  class= "browser-default" v-model="$store.state.loaded_data[$store.state.current_item].style.main.layout">
                           <option v-for="option in [
                    { text: 'Side Icon', value: '' },
                    { text: 'Top Icon', value: 'vertical' }

                  ]" v-bind:value="option.value" v-bind:key="option.text">{{ option.text }}</option>
                         </select>
                  </div>
                </div>
                    <div class="ca-content-alignment field_group row " >  
                    <div class="col m4">                      
                        <label for="" >Content Position</label>  
                    </div>        
            <div class="col m8">              
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
              <div class="col m4">                
                <label for="" >Content Width</label> 
              </div>        
   <div class="col m8"> 
       <select name="layout" class="browser-default"  v-model="$store.state.container.width" >
      <option v-for="option in [
        { text: ' Custom', value: 'custom' },
        { text: 'Auto', value: 'auto' },
        { text: ' Min Content', value: 'min-content' },
        { text: ' Max Content', value: 'max-content' },
        { text: 'Fill Space Available', value: '-webkit-fill-available' }      
    ]" v-bind:value="option.value" v-html="option.text" v-bind:key="option.text">{{ option.text }}</option>
      </select>
   </div>
   
    
</div>
<div v-if="$store.state.container.width=='custom'" class="row field_group">
      <div class="col m12">                   
        <input-size label="Width" :item="$store.state.container.cw" :units="['px','em','rem','%']"></input-size>
      </div>
    </div>
                </div>
                <div class="accordion-content">
                  
                </div>                
              </accordion> 

              <accordion title="Icon">
                <div class="accordion-content">
                  <div class="row">
                    <div class="col m12">

                      <simple-icon-picker ></simple-icon-picker>              
                    </div>
                  </div>
                  <div class="row">
                    <div class="col m12">
                      <!-- <range-slider label ="Icon Size" min='0' max='100' step='1' item="icon" field="size" :units="['px','em','rem','%']"></range-slider> -->
                      <input-size label="Icon Size" :item="$store.state.loaded_data[$store.state.current_item].style.icon" :units="['px','em','rem','%']"></input-size>
                    </div>
                  </div>
                  <div class="row field_group">
                    <div class="col m4">
                      <label>Icon Color</label>
                    </div>
                    <div class="col m8">
                      <simple-color-picker item="icon" field="color" ></simple-color-picker>
                    </div>
                  </div>
                </div>
              </accordion>
           
                  <div class="ca-button-alignment" style="display: none">          
                         <label for="">Position</label>  
                        <select name="button_position" class="browser-default"  v-model="$store.state.loaded_data[$store.state.current_item].text_position">
                           <option v-for="option in [
                    { text: 'Left', value: 'left' },
                    { text: 'Center', value: 'center' },
                    { text: 'Right', value: 'right' }
                  ]" v-bind:value="option.value" v-bind:key="option.value">{{ option.text }}</option>
                         </select>
                      </div>
 

   

        <div class="ca-button-alignment " style="display: none">          
           <label for="">Content Position</label>  
          <select name="button_content_position" class="browser-default"  v-model="$store.state.loaded_data[$store.state.current_item].button_content_position">
             <option v-for="option in [
      { text: 'Left', value: 'left' },
      { text: 'Center', value: 'center' },
      { text: 'Right', value: 'right' }
    ]" v-bind:value="option.value" v-bind:key="option.text">{{ option.text }}</option>
           </select>
        </div> 



              
            
            </div>
         
              
              <accordion title="Size">
                <div class="accordion-content field_group">
                  <label for="auto_width">                    
                  <input type="checkbox" name="auto_width" id="auto_width" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.main.adjust_width"> Adjust the Width
                  </label>
                  <label for="auto_height">                    
                  <input type="checkbox" name="auto_height" id="auto_height" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.main.adjust_height"> Adjust Height
                  </label>

                  <div class="range-wrap" v-if="showRangeWidth">
                     <!-- <range-slider label =" Width (%)" min='0' max='100' step='1' item="main" field="width"></range-slider>                     -->
                     <input-size label="Width" :item="$store.state.loaded_data[$store.state.current_item].style.main.width" :units="['px','em','rem','%']"></input-size>
                  </div>
                  <div class="range-wrap" v-if="showRangeHeight">
                     <input-size label="Height" :item="$store.state.loaded_data[$store.state.current_item].style.main.height" :units="['px','em','rem','%']"></input-size>
                     <!-- <range-slider label =" Height (px)" min='0' max='100' step='1' item="main" field="height"></range-slider>                     -->
                  </div>
                </div>
              </accordion>
           
              
              <accordion title="Border">
                <div class="accordion-content">
                  <div class="row">
                    <div class="col m12 field_group">
                      <label for="border_option"> 
                      <input type="checkbox" name="display_border" id="display_border" true-value="true" false-value=""  v-model="$store.state.loaded_data[$store.state.current_item].style.border.enable"> Adjust Border
                      </label>
                    </div>
                    <div class="col m12 field_group">
                      <label for="border_option"> 
                      <input type="checkbox" name="display_border_radius" id="display_border_radius" true-value="true" false-value=""  v-model="$store.state.loaded_data[$store.state.current_item].style.border_radius.enable"> Adjust Border Radius
                      </label>
                    </div>
                  </div>
                  <div class="row field_group" v-if="showBorder"> 

                    <div class="col m6">
                      <label>Size (px)</label>
                      <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.border.size">
                    </div>
                    <div class="col m6">
                      <label>Style</label>
                      <select name="border_style"  class="browser-default" v-model="$store.state.loaded_data[$store.state.current_item].style.border.style">
                           <option v-for="option in [
                    { text: 'Solid', value: 'solid' },
                    { text: 'Dotted', value: 'dotted' },
                    { text: 'Dashed', value: 'dashed' },
                    { text: 'Double', value: 'double' },
                    { text: 'Groove', value: 'groove' },
                    { text: 'Ridge', value: 'ridge' },
                    { text: 'Inset', value: 'inset' },
                    { text: 'Outset', value: 'outset' }
                  ]" v-bind:value="option.value" v-bind:key="option.text">{{ option.text }}</option>
                         </select>
                    </div>
                    <div class="col m12">
                      <label>Color</label>
                      <color-picker item="border" field="color"></color-picker>
                    </div>
                  </div>
                  <div class="row" v-if="showBorder">
                  <div class="col m12">
                      Enable Border 
                    </div> 
                    <div class="col m6 field_group">
                      <label for="border_option"> 
                      <input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.sides.top"> Top
                      </label>
                    </div>
                    <div class="col m6 field_group">
                      <label for="border_option"> 
                      <input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.sides.right"> Right
                      </label>
                    </div>
                    <div class="col m6 field_group">
                      <label for="border_option"> 
                      <input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.sides.bottom">Bottom
                      </label>
                    </div>
                    <div class="col m6 field_group">
                      <label for="border_option"> 
                      <input type="checkbox" name="display_button_icon" id="display_button_icon" true-value="true" false-value="" v-model="$store.state.loaded_data[$store.state.current_item].style.sides.left"> Left
                      </label>
                    </div>
                  </div>
                  <div class="row" v-if="showBorderRadius"> 
                    <div class="col m12">
                      Border Radius
                    </div>
                  </div>
                  <div class="row" v-if="showBorderRadius"> 
                    <div class="col m6 field_group">
                      <label>Top-Left (px)</label>
                      <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.border_radius.top_left"></div>
                    <div class="col m6 field_group">
                      <label>Top-Right (px)</label>
                      <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.border_radius.top_right"></div>
                    <div class="col m6 field_group">
                      <label>Bottom-Left (px)</label>
                      <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.border_radius.bottom_left"></div>
                    <div class="col m6 field_group">
                      <label>Bottom-Right (px)</label>
                      <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.border_radius.bottom_right"></div>
                  </div>
                </div>
              </accordion>
              <accordion title="Margins">
                <div class="accordion-content">
                  <div class="row ">
                    <div class="col m6 field_group">
                      <label>Top (px)</label>
                      <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.main.margin.top"></div>
                    <div class="col m6 field_group">
                      <label>Right (px)</label>
                      <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.main.margin.right"></div>
                    <div class="col m6 field_group">
                      <label>Bottom (px)</label>
                      <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.main.margin.bottom"></div>
                    <div class="col m6 field_group">
                      <label>Left (px)</label>
                      <input type="number" class = "input_number" v-model="$store.state.loaded_data[$store.state.current_item].style.main.margin.left"></div>
                  </div>
                </div>
              </accordion>
              
          </div> 
          <div class="section" id="advance">
            <h3 class="title">Advanced</h3>
              <div class="row">
                <div class="col m12">
                   <label for="exclusive_page">                    
                  <input type="checkbox" name="exclusive_page" id="exclusive_page"  v-model="$store.state.loaded_data[$store.state.current_item].exclusive_page" true-value="true" false-value=""> Show Only On Specific Page
                  </label>
                  <div v-if="displayExclusivePage">
                    <page-selector field="pages" :item="$store.state.loaded_data[$store.state.current_item]"></page-selector>                    
                  </div>
                </div>
              </div>
             <accordion title="Google Tag Manager">              

                
                <div class="row field_group">
                  <label class="col m3">
                    Category 
                  </label>
                  <span class="col m9">                    
                    <input type="text" class="serp-textfield browser-default" name="button_text" v-model="$store.state.loaded_data[$store.state.current_item].gtm.category">                    
                  </span>
                </div>
                <div class="row field_group">
                  <label class="col m3">
                    Label 
                  </label>
                  <span class="col m9">                    
                    <input type="text" class="serp-textfield browser-default" name="button_text" v-model="$store.state.loaded_data[$store.state.current_item].gtm.label">                    
                  </span>
                </div>
                <div class="row field_group">
                  <label class="col m3">
                    Value 
                  </label>
                  <span class="col m9">                    
                    <input type="text" class="serp-textfield browser-default" name="button_text" v-model="$store.state.loaded_data[$store.state.current_item].gtm.value">                    
                  </span>
                </div>
            </accordion>
          </div>
        </vue-tiny-tabs>
        <div class="row">
          <div class="col m12">
            <a href="#" class="btn blue btn-block save_btn" @click="savingData" :class="{ disabled: isSaving }"><i class="fa fa-save"></i> Save Changes</a>
          </div>
        </div>
        
      </div>
      <div class="col m7 " style="    display: flex;    justify-content: flex-end;">
          <div class="serp-preview-wrap main-mockup" style="width: 100%;max-width: 616px;position: fixed;margin: 0; padding: 0; top: 0;transform: scale(0.85);">
            <div class="serp-preview-screen" style=" max-width: 365px;width: 365px;">    
              <div class="serp-preview-content">
                <div class="serp-preview-content-wrap" style="text-align:center;  position: absolute;
    left: 34.9%;top:62px" >
                  <div class="serp-preview-content-area"> 
                  <div class="serp-preview-body" @elementSelected="test" style="width: 320px;margin: 0 auto;height: 519px;overflow: hidden;">
                      <div class="serpwars-header">       
                      </div>
                      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit in tempore quia consectetur reprehenderit, accusantium adipisci debitis nulla, dignissimos, nesciunt itaque, fugiat consequuntur iste. Ab veniam facilis itaque veritatis repellendus.</p>
                      <p>Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
                      <p >Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna.</p>
                      <p style="display:none;">Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero</p>
                    </div>
                  </div>          
                  <mobile-elements :loaded_data='loaded_data' :current_item="current_item" @ItemIndexSelected="setcurrentItem"></mobile-elements>
                </div>
              </div>                    
            </div>
          </div>
      </div>
    </div>  
  </div>
  </div>
</template>

<script>

import axios from 'axios';

import VueTinyTabs from 'vue-tiny-tabs'
import ContainerPresets from './components/ContainerPresets.vue'
import Accordion from './components/Accordion.vue'

import RangeSlider from './components/ui/RangeSlider.vue'

import InputSize from './components/ui/InputSize.vue'
import PageSelector from './components/ui/PageSelector.vue'
import NavBar from './components/NavBar.vue'
// import ColorPicker from './components/ui/ColorPicker.vue'
import SimpleColorPicker from './components/ui/SimpleColorPicker.vue'
import NewUi from './components/ui/NewUi.vue'
import ElementSelectDropdown from './components/ui/ElementSelectDropdown.vue'
import SimpleIconPicker from './components/ui/SimpleIconPicker.vue'

import MobileElements from './components/MobileElements.vue'

import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import qs  from 'qs';




export default {
  name: 'app',
  data:function(){
    return {
     loaded_data    :JSON.parse('[{"type":"fb_share","name":"","icon":"fab fa-facebook","link_text":"Share","link_path":"#","width":"20","height":"","text_position":"right","display_text":true,"display_icon":true,"visibility_options":"always_visible","visible_on_scroll_value":0,"style":{"main":{"background":"#4284f4","color":"#fff"},"icon":{"background":"#fff","color":"#fff"},"text":{"background":"#fff","color":"#fff"},"border":{"radius":0,"width":0,"style":"none","color":"#fff"},"class":"","id":""}},{"type":"twitter_share","display_text":true,"display_icon":true,"name":"","icon":"fab fa-twitter","link_text":"Share","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":0,"style":{"main":{"background":"#000","color":"#fff"},"icon":{"background":"#fff","color":"#fff"},"text":{"background":"#fff","color":"#fff"},"border":{"radius":0,"width":0,"style":"none","color":"#fff"},"class":"","id":""}},{"type":"google_share","name":"","display_text":true,"display_icon":true,"icon":"fab fa-google-plus","link_text":"Share","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":0,"style":{"main":{"background":"#000","color":"#fff"},"icon":{"background":"#fff","color":"#fff"},"text":{"background":"#fff","color":"#fff"},"border":{"radius":0,"width":0,"style":"none","color":"#fff"},"class":"","id":""}},{"type":"pinterest_share","display_text":true,"display_icon":true,"name":"","icon":"fab fa-pinterest","link_text":"Share","link_path":"#","width":"20","height":"","text_position":"right","visibility_options":"always_visible","visible_on_scroll_value":0,"style":{"main":{"background":"#000","color":"#fff"},"icon":{"background":"#fff","color":"#fff"},"text":{"background":"#fff","color":"#fff"},"border":{"radius":0,"width":0,"style":"none","color":"#fff"},"class":"","id":""}}]'),
     current_item:-1,
     isSaving:false,
     isLoaded:false
    }
  },
  props:[
    "element_id"
  ],
  components: {
    Accordion,
    RangeSlider,
    SimpleColorPicker,
    NewUi,
    InputSize,
    ContainerPresets,
    PageSelector,
    ElementSelectDropdown,
    SimpleIconPicker,
    MobileElements,
    InputSize,
    NavBar,
    'vue-tiny-tabs': VueTinyTabs
  },
  created(){
    this.$store.state.loaded_data = [];
    this.$store.state.container= JSON.parse('{"class":"","id":"","layout":"start","gtm":{"category":""},"width":"auto","cw":{"size":100,"unit":"%"}}');


    this.$store.state.current_item = 0; 
  },
  computed:{
    getLinkText(){
      var context = this;
        return context.$store.state.loaded_data[context.$store.state.current_item].link_text
    },
    selectLayout(el){


    },
    showRangeWidth(){
      var context = this;
        return (context.$store.state.loaded_data[context.$store.state.current_item].style.main.adjust_width=="true");      
    },
    showRangeHeight(){
      var context = this;
        return (context.$store.state.loaded_data[context.$store.state.current_item].style.main.adjust_height=="true");      
    },
    showBorder(){
      var context = this;
      return (context.$store.state.loaded_data[context.$store.state.current_item].style.border.enable=="true");      
    },
    showDelete:function(){
      // console.log(this.$store.state.loaded_data.length);
      return (this.$store.state.loaded_data.length>0);
    },
    showBorderRadius(){
      var context = this;
      return (context.$store.state.loaded_data[context.$store.state.current_item].style.border_radius.enable=="true");      
    },
    displayExclusivePage(){
      return (this.$store.state.loaded_data[this.$store.state.current_item].exclusive_page=="true");      
    }
  }
  ,mounted(){

        this.loadData(env,fetch_id);

  },
  methods:{
    loadData:function(env,fetch_id){
      var context = this;
      if(env=="debug"){
        this.$store.state.loaded_data = loaded_data;
        this.$store.state.container = container;

        this.$store.state.title = title;

        Toastify({
          text: "Debug mode Has Been Enabled",
          duration: 3000,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          backgroundColor: "linear-gradient(to right, #47a3da, #4284f4)",
          stopOnFocus: true // Prevents dismissing of toast on hover
        }).showToast();
        this.isLoaded = true;

      }else{
        if(fetch_id!=0){
          var context = this;

          var data ="";

          axios.post( ajaxurl, qs.stringify( {
            action:"load_item",
            id:fetch_id
          } ) ).then(response=>{
              var  parseData = response.data;
              var  content = JSON.parse(parseData.content);
              context.$store.state.loaded_data = content.loaded_data;
              context.$store.state.container = content.container;
              context.$store.state.title = parseData.title;
              Toastify({
                text: "Loaded CTA Buttons",
                duration: 3000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: 'right', // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #47a3da, #4284f4)",
                stopOnFocus: true // Prevents dismissing of toast on hover
              }).showToast();
              context.isLoaded = true;
          })

        }else{

          // console.log(this.$store.state);
          Toastify({
          text: "Create New CTA Buttons",
          duration: 3000,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          backgroundColor: "linear-gradient(to right, #47a3da, #4284f4)",
          stopOnFocus: true // Prevents dismissing of toast on hover
          }).showToast();

          this.isLoaded = true;
        }
      }
    },


    savingData:function(){
      this.isSaving = true;
      var context = this;

      if(env=="debug"){
        setTimeout(function(){
          Toastify({
          text: "Changes has been Saved",
          duration: 3000,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          backgroundColor: "linear-gradient(to right, #47a3da, #4284f4)",
          stopOnFocus: true // Prevents dismissing of toast on hover
        }).showToast();
          context.isSaving = false;
        },2000)

        console.log(JSON.stringify(context.$store.state.loaded_data));
      }else{
        var context = this;
        var title =  context.$store.state.title;
        var loaded_data =  JSON.stringify(context.$store.state.loaded_data);
        var container =  JSON.stringify(context.$store.state.container);

        console.log(title,loaded_data,container);

        axios.post( ajaxurl, qs.stringify( {
            action:"save_item",
            id:fetch_id,
            title:title,
            loaded_data:loaded_data,
            container:container,
          } ) ).then(response=>{
            var d = response.data;
            Toastify({
              text: d.status+" "+d.message,
              duration: 3000,
              close: true,
              gravity: "bottom", // `top` or `bottom`
              position: 'right', // `left`, `center` or `right`
              backgroundColor: "linear-gradient(to right, #47a3da, #4284f4)",
              stopOnFocus: true // Prevents dismissing of toast on hover
            }).showToast();
            if(d.return_id==-1){              
              context.isSaving = false;
            }else{
              setTimeout(function(){
                location.href=location.search+"&id="+d.return_id
              },2500)
            }
        })

        // $.post(ajaxurl,{
        //     action:"save_item",
        //     id:fetch_id,
        //     title:context.$store.state.title,
        //     loaded_data:context.$store.state.loaded_data,
        //     container:context.$store.state.container,
        //   },
        //   function(data){
        //     var d = JSON.parse(data);

        //     Toastify({
        //       text: d.status+" "+d.message,
        //       duration: 3000,
        //       close: true,
        //       gravity: "bottom", // `top` or `bottom`
        //       position: 'right', // `left`, `center` or `right`
        //       backgroundColor: "linear-gradient(to right, #47a3da, #4284f4)",
        //       stopOnFocus: true // Prevents dismissing of toast on hover
        //     }).showToast();
        //     if(d.return_id==-1){              
        //       context.isSaving = false;
        //     }else{
        //       setTimeout(function(){
        //         location.href=location.search+"&id="+d.return_id
        //       },2500)
        //     }
        //   })
      }
    },
    setcurrentItem:function(e){
      this.current_item = e;
      // console.log(this.loaded_data[e].style.main.background);
     // console.log("eeee"+e);
    },
    deleteElement:function(){
      this.$store.state.loaded_data.splice(this.$store.state.current_item,1)
      // console.log(this.$store.state.current_item)
    },
    fetchStoreData:function(){
      var context = this;
      var o = {
        title:context.$store.state.title,
        loaded_data:context.$store.state.loaded_data,
        container:context.$store.state.container,
      }
      // console.log(JSON.stringify(o));

    },    
    test(){
      // console.log("Events Fired!!!!!");
    }
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
}
.container {
    width: 85%!important;
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
     background-image:url("./assets/27709270.png");
    background-size: 62.22% 100%;
    /* height: 650px; */
    background-position-x: 81%;
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
    width: 47%;
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
    height: 30px;
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
    padding: 0 5px;
}

a.btn.blue.btn-block.save_btn:hover {
    color: #fff;
}

#serp-settings-wrap{
  padding: 0;
}


</style>
