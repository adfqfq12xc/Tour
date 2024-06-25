import { initializeApp } from "firebase/app";

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

const app = initializeApp(firebaseConfig);
export {app};