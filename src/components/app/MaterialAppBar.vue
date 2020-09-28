<template>
  <div
    id="appBar"
    :class="elevationClass">
    <button class="appLogoButton"><img src="../../assets/fox.svg"/></button>
    <h1>Mekanismi / Pelilauta</h1>
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
      // console.log(window.scrollY)
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
  color: var(--font-color-primary);
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0px 9px 1px 0px rgba(0,0,0,0.0);
  transition: box-shadow 0.3s;
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
    width: 42px;
    height: 42px;
    padding: 0px;
    position: absolute;
    right: 16px;
    top: 2px;
    margin-right: 16px;
    overflow: hidden;
    border: solid 2px rgba(255,255,255, 0.44);
    img {
      width: 45px;
      height: 45px;
      margin-left: -2px;
    }
  }
  button.appLogoButton{
    border-radius: 50%;
    width: 42px;
    height: 42px;
    padding: 0px;
    margin-right: 16px;
    margin-top:-4px;
    margin-bottom: -4px;
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
