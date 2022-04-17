// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCisaj9GY0KjzdaqsrHkgiF2bqmHouhzZg",
  authDomain: "edu-co-cc85b.firebaseapp.com",
  projectId: "edu-co-cc85b",
  storageBucket: "edu-co-cc85b.appspot.com",
  messagingSenderId: "1065122388352",
  appId: "1:1065122388352:web:1ad282a810121bb80bc965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;