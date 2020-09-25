<template>
  <div class="stream-container">
    <PostCard
      v-for="post in postStream"
      :key="post.postid"
      :post="post"
      class="material-card">
    </PostCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import firebase from 'firebase/app'
import PostCard from './PostCard.vue'
import 'firebase/firestore'

export default defineComponent({
  components: {
    PostCard
  },
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

    function deletePost (postid: string):void {
      // const db = firebase.firestore()
      // const postRef = db.collection('stream').doc(postid)
      // postRef.delete()
      console.log('triggers', postid)
    }

    return { postStream, deletePost }
  }
})
</script>
