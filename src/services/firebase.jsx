import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUZSI-MnQ0rdylzkgSEpEWlc3qIEZckUs",
  authDomain: "stahl-ecommerce.firebaseapp.com",
  projectId: "stahl-ecommerce",
  storageBucket: "stahl-ecommerce.firebasestorage.app",
  messagingSenderId: "347841731787",
  appId: "1:347841731787:web:31ff48622ae9253de94f4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Truquito para ahorrarme un paso cuando uso la db, arranca app...
export const db = getFirestore(app);