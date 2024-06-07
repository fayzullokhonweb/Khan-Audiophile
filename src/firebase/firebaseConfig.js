import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASulyi8C6icBP3tsLp97mRxNEinFlKXBw",
  authDomain: "mymarket-90f8c.firebaseapp.com",
  projectId: "mymarket-90f8c",
  storageBucket: "mymarket-90f8c.appspot.com",
  messagingSenderId: "923459925246",
  appId: "1:923459925246:web:f0b350a6932febb282a1af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore(app);
