 
import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "chat--ap.firebaseapp.com",
  projectId: "chat--ap",
  storageBucket: "chat--ap.appspot.com",
  messagingSenderId: "1031239996158",
  appId: "1:1031239996158:web:3d42976e70a637c2098baf"
};

 
const app = initializeApp(firebaseConfig);

export default app;