import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDgb7_GiMRDysVARAssEUI2sOo6z2VQNpM",
  authDomain: "netflix-clone-80157.firebaseapp.com",
  projectId: "netflix-clone-80157",
  storageBucket: "netflix-clone-80157.appspot.com",
  messagingSenderId: "325103049348",
  appId: "1:325103049348:web:33b53b4f3ec27cffb880d1",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
