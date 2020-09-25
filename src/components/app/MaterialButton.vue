<template>
  <button
    class='material-button'
    @click="action()">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: false
    },
    action: {
      type: Function,
      required: false
    }
  }
})
</script>
