import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi3ulW2CfZn1B4DtiYjYCDJxvFxzlarAs",
  authDomain: "whatsapp-clone-ecf3d.firebaseapp.com",
  projectId: "whatsapp-clone-ecf3d",
  storageBucket: "whatsapp-clone-ecf3d.appspot.com",
  messagingSenderId: "578599867473",
  appId: "1:578599867473:web:c72e09023e187e27381470",
  measurementId: "G-2NVTFXDL2Q"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // firebase database
const auth = getAuth(firebaseApp); // authentication with firebase
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      alert(error.message);
    });
};
export { signInWithGoogle };
export default db;
