// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu9FpLYLyNk_HqoXPCpGtzPaMI808qZI8",
  authDomain: "proyecto-edya2-49bfa.firebaseapp.com",
  projectId: "proyecto-edya2-49bfa",
  storageBucket: "proyecto-edya2-49bfa.firebasestorage.app",
  messagingSenderId: "961253448568",
  appId: "1:961253448568:web:2a88376d4ca728b8c8068d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth}