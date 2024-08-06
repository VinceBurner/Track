// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMKz-oAx4CYXPpPd74LWQ9eEPyoQmboFQ",
  authDomain: "expense-management-8d9fb.firebaseapp.com",
  projectId: "expense-management-8d9fb",
  storageBucket: "expense-management-8d9fb.appspot.com",
  messagingSenderId: "624780755921",
  appId: "1:624780755921:web:e99eb02e3b9502f18856f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);