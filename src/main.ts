import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import firebase from 'firebase/app'

// import './index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

interface FirebaseEnv {
  VITE_FIREBASE_API_KEY: string,
  VITE_FIREBASE_AUTH_DOMAIN: string,
  VITE_FIREBASE_DATASE_URL: string,
  VITE_FIREBASE_PROJECT_ID: string
  VITE_FIREBASE_STORAGE_BUCKET: string,
  VITE_FIREBASE_MESSAGE_SENDER_ID: string,
  VITE_FIREBASE_APP_ID: string
}

const env:FirebaseEnv = import.meta.env as FirebaseEnv

const config = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.VITE_FIREBASE_DATASE_URL,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID
}
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged((user) => {
  console.log('onAuthStateChanged', user)
})
