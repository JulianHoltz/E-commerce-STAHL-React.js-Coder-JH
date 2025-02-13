
//import del paso extra
import { getFirestore } from "firebase/firestore";

//SIN ESTO, que me lo da Firebase, NO PUEDO CONECTAR LA BASE DE DATOS
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhaV8OFwHM-M98MzeKxTEgB8nfB3-8H6A",
  authDomain: "sthal-caf84.firebaseapp.com",
  projectId: "sthal-caf84",
  storageBucket: "sthal-caf84.firebasestorage.app",
  messagingSenderId: "37450148439",
  appId: "1:37450148439:web:16682f6f9f8187fa3fd112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//paso extra Con esto es mas facil llevarlo a todos lados...
export const db = getFirestore(app);