// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD16g5iCUGjxqa77F-ESrZrIz2VzY7fXyg",
  authDomain: "pruebareact-dd2fb.firebaseapp.com",
  databaseURL: "https://pruebareact-dd2fb-default-rtdb.firebaseio.com",
  projectId: "pruebareact-dd2fb",
  storageBucket: "pruebareact-dd2fb.appspot.com",
  messagingSenderId: "296554024474",
  appId: "1:296554024474:web:f9a0591c4153faf95b8ba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)