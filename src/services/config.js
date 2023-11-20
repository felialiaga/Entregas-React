import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda-final-a4f60.firebaseapp.com",
  projectId: "tienda-final-a4f60",
  storageBucket: "tienda-final-a4f60.appspot.com",
  messagingSenderId: "504081799443",
  appId: "1:504081799443:web:1fc411dd5297b6ab38a2e6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);