<template>
  <div class="versionInfo">{{versionInfo}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { meta } from '../../version'

export default defineComponent({
  setup () {
    const versionInfo = meta?.version
    return { versionInfo }
  }
})
</script>
