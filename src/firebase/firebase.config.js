// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWo2g_IBAt-08ypa0pMOvC04vL0n84i4A",
  authDomain: "restaurant-bbd85.firebaseapp.com",
  projectId: "restaurant-bbd85",
  storageBucket: "restaurant-bbd85.appspot.com",
  messagingSenderId: "639006031616",
  appId: "1:639006031616:web:442eee483f85b083e0fde5",
  measurementId: "G-YN8DLE6QN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


