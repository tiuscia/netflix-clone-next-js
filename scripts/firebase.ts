// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGELXnDm9Nj8ehm3B5I7SX4D63-WbBQeQ",
  authDomain: "netflix-test-f0790.firebaseapp.com",
  projectId: "netflix-test-f0790",
  storageBucket: "netflix-test-f0790.appspot.com",
  messagingSenderId: "100484049407",
  appId: "1:100484049407:web:34f67ccdaf41c3c9755fca",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
