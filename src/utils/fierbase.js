// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBUd9b9BmLQ70AGSsHDDZ6Lrzoz0SFBLs",
  authDomain: "fir-c27e9.firebaseapp.com",
  projectId: "fir-c27e9",
  storageBucket: "fir-c27e9.firebasestorage.app",
  messagingSenderId: "254335637523",
  appId: "1:254335637523:web:ace7e48ecae573eab987e6",
  measurementId: "G-54LE76G96W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);