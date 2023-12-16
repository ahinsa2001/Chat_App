import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOz8jAeg1G1vzpSHh3OQmJBy1hCKIepLY",
  authDomain: "meanchatapp.firebaseapp.com",
  projectId: "meanchatapp",
  storageBucket: "meanchatapp.appspot.com",
  messagingSenderId: "237609193985",
  appId: "1:237609193985:web:5ce7f45282a30e4e416600"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);