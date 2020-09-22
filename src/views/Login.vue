<template>
  <PageHeader text="Login"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '../components/layout/PageHeader.vue'
import { useProfile } from '../lib/useProfile'

export default defineComponent({
  components: {
    PageHeader
  },
  setup () {
    const router = useRouter()
    const { userSessionActive } = useProfile()
    if (userSessionActive.value) router.push('/profile')
  }
})
</script>
