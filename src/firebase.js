// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSRvWHKDH5haZ_9f40L7Uukp1RYv9-WXU",
  authDomain: "blog-with-firebase-3c30b.firebaseapp.com",
  projectId: "blog-with-firebase-3c30b",
  storageBucket: "blog-with-firebase-3c30b.appspot.com",
  messagingSenderId: "358762202379",
  appId: "1:358762202379:web:862be5c6fc270501c24e0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
