<template>
  <button
    @click="action()"
    class="material_fab">
    <img v-if="icon === 'new-post'" src="/@/assets/icons/new-post.svg" />
    <img v-if="icon === 'delete'" src="/@/assets/icons/delete.svg" />
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

<style lang="scss" scoped>
.material_fab {
  position: absolute;
  z-index: 1000;
  bottom: 32px;
  right: 32px;
  height: 52px;
  width: 52px;
  margin: 0;
  padding: 0;
  display: block;
  border-radius: 50%;
  img {
    margin: 0;
    padding: 2px;
    height: 48px;
    width: 48px;
    display: block;
    filter: invert(100%)
  }
}
</style>
