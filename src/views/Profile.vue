<template>
  <PageHeader text="Profile"/>
  <h2>SSO Data</h2>
  <p v-if="userSessionActive">{{userSSOData.displayName}}</p>
  <p v-if="userSessionActive">{{userSSOData.email}}</p>
  <img v-if="userSessionActive" class="avatar" :src="userSSOData.photoURL"/>
  <p><button v-if="userSessionActive">Logout</button></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import { useProfile } from '../lib/useProfile'

export default defineComponent({
  components: {
    PageHeader
  },
  setup () {
    const { userSSOData, userSessionActive } = useProfile()
    return { userSSOData, userSessionActive }
  }
})
</script>

<style scoped>
img.avatar{
  height: 72px;
  width: 72px;
  border-radius: 50%;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12), 0 1px 3px 0 rgba(0, 0, 0, .20)
}
</style>
