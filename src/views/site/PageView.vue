<template>
  <WikiPage
    :siteid="siteid"
    :pageid="resolvedPageid"
    />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import WikiPage from '/@/components/wiki/WikiPage.vue'

export default defineComponent({
  components: {
    WikiPage
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
    const resolvedPageid = ref(props.pageid? props.pageid : props.siteid)
    return{ resolvedPageid }
  }
})
</script>
