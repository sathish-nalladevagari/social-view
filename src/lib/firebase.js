// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNe0ME23rTUqbZlZ4EOeUH0XzXir_hoP4",
  authDomain: "social-view-87e9c.firebaseapp.com",
  projectId: "social-view-87e9c",
  storageBucket: "social-view-87e9c.appspot.com",
  messagingSenderId: "847692602682",
  appId: "1:847692602682:web:5e10988312fc84b44ac403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);