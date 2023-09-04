// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "mern-auth-7d1ff.firebaseapp.com",
  projectId: "mern-auth-7d1ff",
  storageBucket: "mern-auth-7d1ff.appspot.com",
  messagingSenderId: "539231949473",
  appId: "1:539231949473:web:4eab4bd4e1a49c4a53d6e0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
