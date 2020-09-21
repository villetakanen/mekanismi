<template>
  <MaterialBanner/>
  <PageHeader text="Mekanismi 2"/>
  <VersionInfo/>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import PageHeader from './components/layout/PageHeader.vue'
import VersionInfo from './components/app/VersionInfo.vue'
import MaterialBanner from './components/app/MaterialBanner.vue'

export default defineComponent({
  components: {
    PageHeader,
    VersionInfo,
    MaterialBanner
  }
})
</script>

<style lang="scss">
@import './assets/layout.scss';

body {
  font-family: 'Source Sans Pro', sans-serif;
  padding: 0;
  margin: 0;
}
</style>
