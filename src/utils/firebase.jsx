// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChaYWzvFnHl9pxMnh2KgZsy1RkIlwMcw8",
  authDomain: "netflix-gpt-3ba66.firebaseapp.com",
  projectId: "netflix-gpt-3ba66",
  storageBucket: "netflix-gpt-3ba66.firebasestorage.app",
  messagingSenderId: "951833761819",
  appId: "1:951833761819:web:7a5cf11110ff6c3b5300be",
  measurementId: "G-3GECJYRZZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);