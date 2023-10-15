import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBHSpaOV2Zal1hhG9eF60AHaqKcLZyR9Y",
  authDomain: "ecommerce-coderhouse-6f3b9.firebaseapp.com",
  projectId: "ecommerce-coderhouse-6f3b9",
  storageBucket: "ecommerce-coderhouse-6f3b9.appspot.com",
  messagingSenderId: "362285666693",
  appId: "1:362285666693:web:44f55423c4cda2546474ec",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
