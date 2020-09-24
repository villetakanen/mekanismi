<template>
  <MaterialButton>Save</MaterialButton>
  <WikiPage
    :siteid="siteid"
    :pageid="resolvedPageid"
    />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import WikiPage from '/@/components/wiki/WikiPage.vue'
import MaterialButton from '/@/components/app/MaterialButton.vue'

export default defineComponent({
  components: {
    WikiPage,
    MaterialButton
  },
  props: {
    siteid: {
      type: String,
      required: true
    },
    pageid: {
      type: String,
      required: false
    }
  },
  setup (props) {
    const resolvedPageid = ref(props.pageid ? props.pageid : props.siteid)
    return { resolvedPageid }
  }
})
</script>
