<template>
  <div class="material-card">
    <p v-for="(block, index) in post.blockContent.blocks"
      :key="index">{{block.data.text}}</p>
    <MaterialButton text :action="remove">Delete</MaterialButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import firebase from 'firebase/app'
import MaterialButton from '/@/components/app/MaterialButton.vue'
import 'firebase/firestore'

export default defineComponent({
  components: {
    MaterialButton
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const remove = () => {
      console.log('delete')
      firebase.firestore().collection('stream').doc(props.post.postid).delete()
    }
    return { remove }
  }
})
</script>
