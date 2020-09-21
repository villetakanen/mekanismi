<template>
  <PageHeader text="About"/>
  <div>
    <h1>Stylebook?</h1>
    <button>button</button>
    <button class="action">action button</button>
    <button class="action-text">action-text button</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'

export default defineComponent({
  components: {
    PageHeader
  }
})
</script>
