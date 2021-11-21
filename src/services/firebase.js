// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-nT9oLuQMfspgdJx6TYC3lNvCPjTDDvw",
  authDomain: "budget-tracker-6d4a3.firebaseapp.com",
  projectId: "budget-tracker-6d4a3",
  storageBucket: "budget-tracker-6d4a3.appspot.com",
  messagingSenderId: "981670996112",
  appId: "1:981670996112:web:17c7482d029016db6d1015",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth();
export default db;
