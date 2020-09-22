<template>
  <div
    id="appBar"
    :class="elevationClass">
    <button class="appLogoButton"><img src="../../assets/fox.svg"/></button>
    <h1>Mekanismi</h1>
    <VersionInfo/>
  </div>
  <div style="height:52px;clear:both"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import VersionInfo from './VersionInfo.vue'

export default defineComponent({
  components: {
    VersionInfo
  },
  setup () {
    const elevationClass = ref('')
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 0) elevationClass.value = 'elevated'
      else elevationClass.value = ''
    }
    onMounted(() => { window.addEventListener('scroll', handleScroll) })
    return { elevationClass }
  }
})
</script>

<style lang="scss" scoped>
div#appBar{
  display: flex;
  background-color: var(--color-primary);
  height: 22px;
  border-bottom: solid 4px var(--color-primary-accent);
  color: white;
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0px 9px 1px 0px rgba(0,0,0,0.0);
  transition: box-shadow 0.3s;
  h1 {
    font-weight: 200;
    text-transform: uppercase;
    font-size: 22px;
    line-height: 22px;
    margin: 0;
    padding: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
  &.elevated {
    box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.20);
    // box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)
  }
  button.appLogoButton{
    border-radius: 50%;
    width: 54px;
    height: 54px;
    padding: 8px;
    margin-right: 16px;
  }
}
</style>
