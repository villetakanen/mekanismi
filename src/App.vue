<template>
  <h1>Mekanismi 2</h1>
  <button :disabled="!updatesAvailable" v-on:click="acceptUpdate">update!</button>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

export default defineComponent({
  setup(props) {
    const updatesAvailable:Ref = ref(false)

    // ************************************************************************
    // * SETUP WORKBOX/SPA AND THE UPDATE BUTTON HERE                         *
    // * TODO: MOVE TO A COMPONENT WHEN FUNCTIONAL                            *
    // ************************************************************************
    window.addEventListener('load', () => {
      if ('serviceWorker' in navigator) {
        console.log('adding event listener')
        
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {

          function listenForWaitingServiceWorker(reg, callback) {
            console.log(reg)
            function awaitStateChange() {
              reg.installing.addEventListener('statechange', function() {
                if (this.state === 'installed') callback(reg);
              });
            }
            if (!reg) return
            if (reg.waiting) return callback(reg)
            if (reg.installing) awaitStateChange()
            reg.addEventListener('updatefound', awaitStateChange)
          }
          
          function promptUserToRefresh(reg) {
            // this is just an example
            // don't use window.confirm in real life; it's terrible
            if (window.confirm("New version available! OK to refresh?")) {
              reg.waiting.postMessage('skipWaiting');
            }
          }

          listenForWaitingServiceWorker(registration, promptUserToRefresh)
        }) 

        // reload once when the new Service Worker starts activating
        let refreshing:Boolean
        navigator.serviceWorker.addEventListener('controllerchange',
          () => {
            if (refreshing) return
            refreshing = true
            window.location.reload()
          }
        )
      }
    })
    function acceptUpdate () {
      console.log('acceptUpdate ...')
    }


    return { updatesAvailable, acceptUpdate }
  }
})
</script>
