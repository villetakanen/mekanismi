<template>
  <div class="material-banner">
    <p>Banner! The banner message communicates a change or error within an app. Banners should be considered as 
      part of your overall in-app messaging strategy.</p>
    <button>Cancel</button>
    <button>Accept</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style lang="scss" scoped>
.material-banner {
  display: block;
  width: 100%;
  position: relative;
  height: auto;
  margin: 0;
  padding: 16px;
  border-bottom: 2px solid var(--color-border-light);
  p {
    color: red
  }
}
</style>
