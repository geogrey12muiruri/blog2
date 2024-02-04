// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "parrot-s-blog.firebaseapp.com",
  projectId: "parrot-s-blog",
  storageBucket: "parrot-s-blog.appspot.com",
  messagingSenderId: "326275822987",
  appId: "1:326275822987:web:bdba9285d07a7f4b3deb8e",
  measurementId: "G-CYPGE9FTD5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
