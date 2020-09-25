import { computed, ref } from 'vue'
import firebase from 'firebase/app'

export interface SSOInfo {
  uid: string,
  email?: string|null,
  displayName?: string|null,
  photoURL?: string|null
}

const SSOStruct:SSOInfo = { uid: '' }

const userIsAuthz = ref(false)
const userSSOinfo = ref(SSOStruct)

const userSessionActive = computed(():boolean => { return userIsAuthz.value })
const userSSOData = computed(():SSOInfo => (userSSOinfo.value))

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
