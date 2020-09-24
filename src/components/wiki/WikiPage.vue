<template>
    <div id="editorjs">&nbsp;</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import EditorJS, { OutputBlockData } from '@editorjs/editorjs'
import Header from '@editorjs/header'
import { Page, PageData, useSite } from '../../lib/site'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default defineComponent({
  props: {
    pageid: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const { site } = useSite()
    const editor = new EditorJS({
      holder: 'editorjs',
      hideToolbar: false,
      tools: {
        header: Header
      }
    })
    const pageStruct:Page = {
      siteid: site.value.siteid,
      pageid: props.pageid,
      data: {
        title: props.pageid,
        blockContent: undefined
      }
    }
    const page = ref(pageStruct)

    let unsubscribe = () => {}

    function toBlockData (data:string|undefined):OutputBlockData[] {
      console.log('toBlockData', data)
      if (!data) return [{ type: 'paragraph', data: { text: '...' } }]
      const dataJSON = JSON.parse(data)
      return dataJSON as OutputBlockData[]
    }

    function subscribe () {
      const db = firebase.firestore()
      const pageRef = db.collection('sites').doc(site.value.siteid).collection('pages').doc(props.pageid)
      unsubscribe = pageRef.onSnapshot((doc) => {
        if (doc.exists) {
          page.value.data = doc.data() as PageData
          editor.isReady.then(() => {
            editor.blocks.render({
              blocks: toBlockData(page.value.data.blockContent)
            })
          })
        }
      })
    }

    onMounted(() => {
      subscribe()
      editor.isReady.then(() => {
        editor.blocks.render({
          blocks: [{
            type: 'header',
            data: {
              text: 'Example header ' + site.value.siteid + '/' + props.pageid,
              level: 1
            }
          }]
        })
      })
    })

    onUnmounted(() => {
      unsubscribe()
    })
    return { site, page }
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
