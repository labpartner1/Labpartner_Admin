import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnJNQbcbcoB3RtRZVUDUasTkOPvFOJk4Y",
    authDomain: "codemantra-60629.firebaseapp.com",
    projectId: "codemantra-60629",
    storageBucket: "codemantra-60629.appspot.com",
    messagingSenderId: "26212039494",
    appId: "1:26212039494:web:f99b6f1d4ddba1cc698347",
    measurementId: "G-3K9BC1VTTJ"
  };
  const app = initializeApp(firebaseConfig)
  export const db=getFirestore(app)