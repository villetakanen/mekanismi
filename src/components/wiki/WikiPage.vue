<template>
    <h1>Alive!</h1>
    <div id="editorjs">Editor is loaded here...</div>
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