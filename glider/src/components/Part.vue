<template>
  <div :class = "['part', 
                  'part-' + this.id, 
                  'state-' + state]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Part',
  props: {
    id: String,
    state:String
  }
}
</script>
