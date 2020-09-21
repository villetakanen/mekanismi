<template>
  <MaterialBanner/>
  <div id="router-view-container">
    <div id="router-view-layout">
      <p>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </p>
      <router-view></router-view>
    </div>
  </div>
  <VersionInfo/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VersionInfo from './components/app/VersionInfo.vue'
import MaterialBanner from './components/app/MaterialBanner.vue'

export default defineComponent({
  components: {
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
