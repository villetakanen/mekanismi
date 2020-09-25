<template>
  <div class="stream-container">
    <div
      v-for="post in postStream" :key="post.postid"
      class="material-card">
      <p v-for="block in post.blockContent.blocks" :key="block.time">{{block.data.text}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default defineComponent({
  setup () {
    const postStream = ref([
      { postid: '', author: 'aaa', blockContent: { type: 'paragraph', data: { text: 'aaa' } } }
    ])

    let unsubscribe = () => {}

    onMounted(() => {
      const db = firebase.firestore()
      unsubscribe = db.collection('stream').onSnapshot((docChanges) => {
        postStream.value = []
        docChanges.forEach((doc) => {
          postStream.value.push(
            {
              postid: doc.id,
              author: '' + doc.data()?.author,
              blockContent: doc.data()?.blockContent
            }
          )
        })
      })
    })

    onUnmounted(() => {
      unsubscribe()
    })

    return { postStream }
  }
})
</script>
