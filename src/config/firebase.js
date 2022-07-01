// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBkpi6HwZhYHX6NWdXBqad05Z9YRyC4Vk0",
  authDomain: "budget-app-33d89.firebaseapp.com",
  projectId: "budget-app-33d89",
  storageBucket: "budget-app-33d89.appspot.com",
  messagingSenderId: "986698124670",
  appId: "1:986698124670:web:cb915100c6f02e2c15772f",
  measurementId: "G-0MKJKMB1N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth,db};