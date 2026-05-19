// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzRsZWXo-pAgFksjgNNdMb_rw0zsBQ4zM",
  authDomain: "mobile2026-89c28.firebaseapp.com",
  projectId: "mobile2026-89c28",
  storageBucket: "mobile2026-89c28.firebasestorage.app",
  messagingSenderId: "226582836045",
  appId: "1:226582836045:web:ff33bddde4b97099ca7d04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getFirestore();