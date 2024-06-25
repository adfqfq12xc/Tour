// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRHIDxAIlvEP3oxSxVZjzglyi84nx-1Sk",
  authDomain: "login-2b66b.firebaseapp.com",
  projectId: "login-2b66b",
  databaseURL:"https://login-2b66b-default-rtdb.firebaseio.com",
  storageBucket: "login-2b66b.appspot.com",
  messagingSenderId: "810959687838",
  appId: "1:810959687838:web:bcd3b84fac6b0e720a6b8f",
  measurementId: "G-BG86EPQXGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app};