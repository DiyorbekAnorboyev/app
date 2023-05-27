import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQxAYhmVBpKHnUuhvNF489ryjYtOsf9SI",
  authDomain: "instagram-83bf3.firebaseapp.com",
  projectId: "instagram-83bf3",
  storageBucket: "instagram-83bf3.appspot.com",
  messagingSenderId: "78577460097",
  appId: "1:78577460097:web:f40ca74c7df9b7c39c7e80",
  measurementId: "G-JH6G8Z79DY"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);