<template>
  <PageHeader text="Mekanismi 2"/>
  <button :disabled="!updatesAvailable" v-on:click="acceptUpdate">update!</button>
  <VersionInfo/>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { register } from 'register-service-worker'
import PageHeader from './components/layout/PageHeader.vue'
import VersionInfo from './components/app/VersionInfo.vue'

export default defineComponent({
  components: {
    PageHeader,
    VersionInfo
  },
  setup (props) {
    const updatesAvailable:Ref = ref(false)
    let swr:ServiceWorkerRegistration|undefined

    // ************************************************************************
    // * SETUP WORKBOX/SPA AND THE UPDATE BUTTON HERE                         *
    // * TODO: MOVE TO A COMPONENT WHEN FUNCTIONAL                            *
    // ************************************************************************

    register('/service-worker.js', {
      registrationOptions: { scope: './' },
      ready (registration) {
        console.log('Service worker is active.')
      },
      registered (registration) {
        console.log('Service worker has been registered.')
        setInterval(() => {
          registration.update()
        }, 100) // 1000 * 60) // minute checks for testing * 60) // e.g. hourly checks
      },
      cached (registration) {
        console.log('Content has been cached for offline use.')
      },
      updatefound (registration) {
        console.log('New content is downloading.')
      },
      updated (registration:ServiceWorkerRegistration) {
        console.log('New content is available; please refresh.')
        updatesAvailable.value = true
        swr = registration
      },
      offline () {
        console.log('No internet connection found. App is running in offline mode.')
      },
      error (error) {
        console.error('Error during service worker registration:', error)
      }
    })

    let refreshing = false
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return
      refreshing = true
      window.location.reload()
    })

    function acceptUpdate () {
      if (!swr || !swr.waiting) { return }
      swr.waiting.postMessage('skipWaiting')
    }

    // *** end SETUP WORKBOX/SPA AND THE UPDATE BUTTON HERE *******************

    return { updatesAvailable, acceptUpdate }
  }
})
</script>

<style>
body {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
