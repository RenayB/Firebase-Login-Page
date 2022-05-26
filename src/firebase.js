// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOkojS08f87EG9F97NXMPPylNQyyWk1WQ",
  authDomain: "fire-base-auth-prac.firebaseapp.com",
  projectId: "fire-base-auth-prac",
  storageBucket: "fire-base-auth-prac.appspot.com",
  messagingSenderId: "650915775089",
  appId: "1:650915775089:web:965b2f91a225835122d1d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app 