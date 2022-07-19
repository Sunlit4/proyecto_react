// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2wQYWXClyZhvcnShznqTACaM1Jl75Vo4",
  authDomain: "projectreact-159c5.firebaseapp.com",
  projectId: "projectreact-159c5",
  storageBucket: "projectreact-159c5.appspot.com",
  messagingSenderId: "89913260469",
  appId: "1:89913260469:web:5b172fe0a5e2cabcc641fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)