import { computed, ref } from 'vue'
import firebase from 'firebase/app'

const userIsAuthz = ref(false)
const userSSOinfo = ref({})

const userSessionActive = computed(():boolean => { return userIsAuthz.value })
const userSSOData = computed(() => (userSSOinfo.value))

function authStateChanged (user:firebase.User|null):void {
  if (!user) {
    userIsAuthz.value = false
    return
  }
  userIsAuthz.value = true
  userSSOinfo.value = {
    email: user.email,
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL
  }
}

export function useProfile () {
  return { userSessionActive, userSSOData, authStateChanged }
}
