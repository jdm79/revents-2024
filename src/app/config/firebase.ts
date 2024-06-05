// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-malv.firebaseapp.com",
  projectId: "revents-malv",
  storageBucket: "revents-malv.appspot.com",
  messagingSenderId: "663073865745",
  appId: "1:663073865745:web:a63a2a651c72fc092931b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
