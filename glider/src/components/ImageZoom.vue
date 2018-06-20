<template>
  <div :class = "['part', 
                  'part-' + this.id, 
                  'state-' + state]">

    <div :class = "this.id + '-control'">
        <button v-on:click="zoomIn">+</button>
        <button v-on:click="zoomOut">-</button>
    </div>

    <img :style="'zoom:'+zoomLevel" :src="asset">
    
  </div>
</template>


<script>
import Part from './Part.vue'
export default {
  name: 'ImageZoom',
  extends: Part,
  props: {
    id: String,
    state:String,
    asset:String
  },
  data() {
    return {
      zoomLevel: 1
    }
  },
  methods: {
      zoomIn: function (event) {
        this.zoomLevel++;
      },

      zoomOut: function(){
        if(this.zoomLevel > 1)
          this.zoomLevel--;
      }
    }
}
</script>
