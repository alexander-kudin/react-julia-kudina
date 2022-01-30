import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBc2Ioi6laozpZ1RPBmx5KnVhjj0wafLM",
  authDomain: "react-julia-kudina.firebaseapp.com",
  projectId: "react-julia-kudina",
  storageBucket: "react-julia-kudina.appspot.com",
  messagingSenderId: "101294698365",
  appId: "1:101294698365:web:2e49b7e6556966cdeba614"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);