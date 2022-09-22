// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPHwSveluDJ2LZBaEYIm8kf-SP40zOgCo",
  authDomain: "todo-app-colorathe.firebaseapp.com",
  projectId: "todo-app-colorathe",
  storageBucket: "todo-app-colorathe.appspot.com",
  messagingSenderId: "53279458312",
  appId: "1:53279458312:web:e981aceee7ba496ca0fdbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
