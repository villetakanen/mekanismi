<template>
  <div class="material-banner">
    <div class="banner-container">
    <p>Banner! The banner message communicates a change or error within an app. Banners should be considered as
      part of your overall in-app messaging strategy.</p>
      <div class="actions">
        <button class="action action-text">Cancel</button>
        <button class="action action-text">Accept</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style lang="scss" scoped>
@import '../../assets/include-media.scss';

.material-banner {
  display: block;
  position: relative;
  height: auto;
  margin: 0;
  padding: 16px;
  border-bottom: 2px solid var(--color-border-light);
  @include media('>desktop') {
    p {
      float: left;
      max-width: 60em;
    }
  }
  button {
    margin: 4px;
  }
}

@include media('>desktop') {
  .material-banner {
    padding: 16px 32px;
  }
  .banner-container {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    div.actions {
      align-self: center;
    }
  }
}

button.action{
    border: none;
    background-color: var(--color-primary-accent);
    color: var(--color-fore-on-accent);
    padding: 8px 16px;
    border-radius: 2px;
    font-weight: 600;
    text-transform: uppercase;
  }
button.action-text{
    background: none;
    color: var(--color-primary-accent);
  }

</style>
