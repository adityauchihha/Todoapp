import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:"AIzaSyDAwNwvkChUekZtR1hcfVrp_3YqcdPnbVg",
  authDomain:"todoapp-bb3ef.firebaseapp.com",
  projectId:"todoapp-bb3ef",
  storageBucket:"todoapp-bb3ef.appspot.com" ,
  messagingSenderId: "261832015216",
  appId:"1:261832015216:web:5081015d72c9f258a1a3b5"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
