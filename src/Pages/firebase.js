import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxO0zs2_L_2wzLThqeyeOlSBi_uVxwHiQ",
  authDomain: "chatapp-8d8bd.firebaseapp.com",
  projectId: "chatapp-8d8bd",
  storageBucket: "chatapp-8d8bd.appspot.com",
  messagingSenderId: "975458945302",
  appId: "1:975458945302:web:e84535d6fb6c3fa2966837",
  measurementId: "G-Z1HGN66XQE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
//const analytics = getAnalytics(app);