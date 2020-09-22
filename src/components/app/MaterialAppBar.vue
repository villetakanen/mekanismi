<template>
  <div
    id="appBar"
    :class="elevationClass">
    <button class="appLogoButton"><img src="../../assets/fox.svg"/></button>
    <h1>Mekanismi</h1>
    <VersionInfo/>
    <div
      v-if="userSessionActive"
      class="profileButton"
      @click="openProfile()">
      <img :src="userSSOData.photoURL" :alt="userSSOData.displayName"/>
    </div>
    <div
      v-if="!userSessionActive"
      class="profileButton"
      @click="openProfile()">
      <img src="../../assets/profile.svg" alt="login"/>
    </div>
  </div>
  <div style="height:52px;clear:both"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProfile } from '../../lib/useProfile'
import VersionInfo from './VersionInfo.vue'

export default defineComponent({
  components: {
    VersionInfo
  },
  setup () {
    const { userSessionActive, userSSOData } = useProfile()
    const router = useRouter()

    const openProfile = () => {
      router.push('/profile')
    }

    const elevationClass = ref('')
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 0) elevationClass.value = 'elevated'
      else elevationClass.value = ''
    }
    onMounted(() => { window.addEventListener('scroll', handleScroll) })
    return { elevationClass, userSessionActive, userSSOData, openProfile }
  }
})
</script>

<style lang="scss" scoped>
div#appBar{
  display: flex;
  background-color: var(--color-primary);
  height: 22px;
  border-top: solid 4px var(--color-primary-dark);
  color: var(--font-color-primary);
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
    box-shadow: 0px 16px 0px 0px var(--color-shadow-14);
    // box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)
  }
  div.profileButton {
    border-radius: 50%;
    width: 38px;
    height: 38px;
    padding: 0px;
    position: absolute;
    right: 32px;
    top: 6px;
    margin-right: 16px;
    overflow: hidden;
    border: solid 2px rgba(255,255,255, 0.44);
    img {
      width: 42px;
      height: 42px;
      margin-left: -2px;
    }
  }
  button.appLogoButton{
    border-radius: 50%;
    width: 42px;
    height: 42px;
    padding: 0px;
    margin-right: 16px;
    margin-top:-10px;
    border: solid 2px rgba(255,255,255, 0.44);
    overflow: visible;
    box-shadow: none;
    background-color: none;
    transition: background 0.8s;
    img {
      margin: -4px;
    }
    &:hover {
      background-color: var(--color-shadow-14);
    }
  }
}
</style>
