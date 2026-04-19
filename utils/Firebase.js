import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDyjdF3ZhNnVFrAgs5ZHcLSvE9pAXIGlOw",
  authDomain: "elearning-59896.firebaseapp.com",
  projectId: "elearning-59896",
  storageBucket: "elearning-59896.firebasestorage.app",
  messagingSenderId: "406699500096",
  appId: "1:406699500096:web:650c5c3033b767c111f5a5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}