<template>
  <button
    :class='`material-button ${buttonClasses}`'
    @click="clicked()"
    @mouseenter="hover()"
    @mouseleave="dehover()">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: false
    },
    action: {
      type: Function,
      required: false
    }
  },
  setup (props) {
    const buttonClassArray = ref([''])
    const buttonClasses = computed(():string => {
      let r:string = ''
      buttonClassArray.value.forEach((c) => { r += c + ' ' })
      return r
    })
    if (typeof props.text === 'string') buttonClassArray.value.push('material-button-text')

    function hover () {
      buttonClassArray.value.push('material-button-hover')
      console.log('hover')
    }
    function dehover () {
      buttonClassArray.value = buttonClassArray.value.filter((val) => (val !== 'material-button-hover'))
    }

    function clicked () {
      buttonClassArray.value.push('material-button-clicked')
      if (props.action) props.action()
    }

    return { buttonClasses, hover, dehover, clicked }
  }
})
</script>
