// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSqhwB5Th8Nc5Eil1KiOZWe594mK7WS_8",
  authDomain: "crud-reservas-react.firebaseapp.com",
  projectId: "crud-reservas-react",
  storageBucket: "crud-reservas-react.appspot.com",
  messagingSenderId: "635932739981",
  appId: "1:635932739981:web:7aa275aa91d61b7c41d5c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

