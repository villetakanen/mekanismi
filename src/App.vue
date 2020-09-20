<template>
  <h1>Mekanismi 2</h1>
  <button :disabled="!updatesAvailable" v-on:click="acceptUpdate">update!</button>
  <button :disabled="!updatesAvailable" v-on:click="rejectUpdate">cancel!</button>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { Workbox, messageSW } from 'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-window.prod.mjs'

export default defineComponent({
  setup(props) {
    const rejectUpdate:Ref = ref(() => {})
    const acceptUpdate:Ref = ref(() => {})
    const updatesAvailable:Ref = ref(false)

    // ************************************************************************
    // * SETUP WORKBOX/SPA AND THE UPDATE BUTTON HERE                         *
    // * TODO: MOVE TO A COMPONENT WHEN FUNCTIONAL                            *
    // ************************************************************************
    window.addEventListener('load', () => {
      if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
          console.log('adding event listener')
          //navigator.serviceWorker.register('/service-worker.js')
          const wb = new Workbox('/service-worker.js')
          let registration
          

          const showSkipWaitingPrompt = (event) => {
          // `event.wasWaitingBeforeRegister` will be false if this is
          // the first time the updated service worker is waiting.
          // When `event.wasWaitingBeforeRegister` is true, a previously
          // updated service worker is still waiting.
          // You may want to customize the UI prompt accordingly.

          const prompt = refreshSnack({
            onAccept: async () => {
                console.log('refreshSnack, accept')
                // Assuming the user accepted the update, set up a listener
                // that will reload the page as soon as the previously waiting
                // service worker has taken control.
                wb.addEventListener('controlling', (event) => {
                  window.location.reload();
                });

                if (registration && registration.waiting) {
                  // Send a message to the waiting service worker,
                  // instructing it to activate.  
                  // Note: for this to work, you have to add a message
                  // listener in your service worker. See below.
                  messageSW(registration.waiting, {type: 'SKIP_WAITING'});
                }
              },

              onReject: () => {
                console.log('refreshSnack, reject')
                updatesAvailable.value = false
              }
            })
          }

          function refreshSnack(e:{ onAccept:Function, onReject:Function}):void {
            updatesAvailable.value = true
            acceptUpdate.value = e.onAccept
            rejectUpdate.value = e.onReject
          }

          wb.addEventListener('waiting', showSkipWaitingPrompt);
          wb.addEventListener('externalwaiting', showSkipWaitingPrompt)

          wb.register()
        })
      }
    })
  }
})
</script>
