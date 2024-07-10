
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBrEWGw0_bpm_fq3Hx1UEH5uylrjZq4TBU",
  authDomain: "ecommerce-bcf0d.firebaseapp.com",
  projectId: "ecommerce-bcf0d",
  storageBucket: "ecommerce-bcf0d.appspot.com",
  messagingSenderId: "1037982079133",
  appId: "1:1037982079133:web:181c21dbffb601960cdc74" 
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}