<template>
  <div class="newPost material-card">
    <div id="newPostJSEditor"></div>
    <button @click="post()">post!</button>
  </div>
  <Stream/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditorJS from '@editorjs/editorjs'
import Paragraph from '@editorjs/paragraph'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Stream from '/@/components/stream/Stream.vue'
import { useProfile } from '../../lib/useProfile'

export default defineComponent({
  components: {
    Stream
  },
  setup () {
    const editor = new EditorJS({
      holder: 'newPostJSEditor',
      hideToolbar: true,
      minHeight: 22,
      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: {
            placeholder: 'Click to edit...'
          }
        }
      }
    })
    editor.isReady.then(() => {
      editor.blocks.clear()
    })

    function post ():void {
      const db = firebase.firestore()
      const streamRef = db.collection('stream')
      const { userSSOData } = useProfile()
      editor.save().then((editorData) => {
        streamRef.add(
          {
            author: userSSOData.value.uid,
            blockContent: editorData
          }).then(() => {
          editor.blocks.clear()
        })
      })
    }
    return { post }
  }

})
</script>

<style lang="scss" scoped>
.newPost {
  margin: 8px;
  padding: 8px;
  border: solid 1px var(--color-shadow-14);
  max-width: 720px;
  margin:0 auto;
}
.codex-editor__redactor{
  padding-bottom: 0 !important;
}
</style>
