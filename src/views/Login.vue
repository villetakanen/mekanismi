<template>
  <PageHeader text="Login"/>
  <div class="loginButtons">
    <button class="googleLoginButton" @click="socialGoogleLogin()"><div class="loginLogo"></div>Sign in with Google</button>
    <button class="facebookLoginButton" @click="socialFacebookLogin()"><div class="loginLogo"></div>Sign in with Facebook</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '../components/layout/PageHeader.vue'
import { useProfile } from '../lib/useProfile'
import firebase from 'firebase/app'
import 'firebase/auth'

export default defineComponent({
  components: {
    PageHeader
  },
  setup () {
    const router = useRouter()
    const { userSessionActive } = useProfile()
    if (userSessionActive.value) router.push('/profile')

    function socialGoogleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('email')
      firebase.auth().signInWithPopup(provider)
    }

    function socialFacebookLogin () {
      const provider = new firebase.auth.FacebookAuthProvider()
      provider.addScope('email')
      firebase.auth().signInWithPopup(provider)
    }

    return { socialGoogleLogin, socialFacebookLogin }
  }
})
</script>

<style lang="scss" scoped>
.loginButtons {
    display: flex;
    flex-direction: column;
    width: 240px;
    margin: auto;
    button {
      position: relative;
      padding-left: 46px;
      text-align: left;
      margin-bottom: 8px;
    }
    .googleLoginButton{
      background-color: white;
      color: #666;
      .loginLogo {
        background-image: url('../assets/google.svg');
      }
    }
    .facebookLoginButton{
      background-color: #4267B2;
      color: rgba(255,255,255,0.8);
      .loginLogo {
        background-image: url('../assets/facebook.svg');
      }
    }
    .loginLogo {
        display: block;
        position: absolute;
        left: 16px;
        height: 18px;
        width: 18px;
        background-size: 100% 100%;
      }
}
</style>
