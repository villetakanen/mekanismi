<template>
  <MaterialAppBar/>
  <MaterialBanner/>
  <div id="router-view-container">
    <div id="router-view-layout">
      <p>
        Test routes:
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/profile">Profile</router-link>
      </p>
      <p>User is logged in: {{userSessionActive}}</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import MaterialBanner from './components/app/MaterialBanner.vue'
import { useProfile } from './lib/useProfile'
import MaterialAppBar from './components/app/MaterialAppBar.vue'

export default defineComponent({
  components: {
    MaterialBanner,
    MaterialAppBar
  },
  setup () {
    const { userSessionActive } = useProfile()

    return { userSessionActive }
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
