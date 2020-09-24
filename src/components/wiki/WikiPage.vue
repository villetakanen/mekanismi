<template>
    <div id="editorjs">&nbsp;</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'

export default defineComponent({
  props: {
    siteid: {
      type: String,
      required: true
    },
    pageid: {
      type: String,
      required: true
    }
  },
  setup (props) {
    onMounted(() => {
      const editor = new EditorJS({
        holder: 'editorjs',
        hideToolbar: false,
        tools: {
          header: Header
        }
      })
      editor.isReady.then(() => {
        editor.blocks.render({
          blocks: [{
            type: 'header',
            data: {
              text: 'Example header ' + props.siteid + '/' + props.pageid,
              level: 1
            }
          }]
        })
      })
    })
  }
})
</script>

<style lang="scss">
#editorjs{
  background-color: rgba(255, 200, 0, 0.33);
  margin-top: 8px;
  margin-bottom: 8px;
}
.ce-block__content{
  div, h1{
    background-color:white;
    border-bottom: solid 1px var(--color-shadow-14);
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
  }
}
</style>
