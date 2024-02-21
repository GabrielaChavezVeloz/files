import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDARMSsvYHMzQ-F1onqN5lNr79NmtuiZ7s",
  authDomain: "react-final-project-b1cb3.firebaseapp.com",
  projectId: "react-final-project-b1cb3",
  storageBucket: "react-final-project-b1cb3.appspot.com",
  messagingSenderId: "1074896414821",
  appId: "1:1074896414821:web:d86fa12de5c2fe3b65fe8c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
