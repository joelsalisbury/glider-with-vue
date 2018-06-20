<template>
  <div id="app">
    <slot></slot>
  </div>
</template>

<script>
import Part from '../components/Part.vue'

export default {
  name: 'app',
  components: {
    Part
  }
}
</script>
