<template>
  <div class="">
      <div class="tab__header">
          <a href="#" class="tab__link p-4 block light-blue accent-3 no-underline white-text border-b-2 border-white flex justify-between" @click.prevent="active = !active">
              <strong>{{title}}</strong>
              <span class="down-Arrow" v-show="!active">&#9660;</span>
              <span class="up-Arrow" v-show="active">&#9650;</span>
          </a>
      </div>
      <div class="tab__content p-2" v-show="active"><slot /></div>            
  </div>
</template>
<script>
export default{
  name:"Accordion",
  props: [
    'title'
  ],
   data() {
    return {
      active: false,
    }
  },

}
</script>
<style>
  .tab__header>a {
    display: block;
    padding: 10px;
    margin: 5px 0 5px;
}
</style>