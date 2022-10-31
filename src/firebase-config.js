import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

//hide apiKey with a variable before publishing on github
const firebaseConfig = {
  apiKey: "AIzaSyAtYwdHlFt0F3Ww7LBdSgDZC2PKcxQZ1yk",
  authDomain: "personal-portfolio-19c29.firebaseapp.com",
  projectId: "personal-portfolio-19c29",
  storageBucket: "personal-portfolio-19c29.appspot.com",
  messagingSenderId: "473945898937",
  appId: "1:473945898937:web:2b48ea1c970d57dd9e8068",
  measurementId: "G-B1YVX8MFHD",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
