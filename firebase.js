import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signInWithPopup, GoogleAuthProvider,provider
  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  import { getFirestore, collection, addDoc,getDocs ,doc, setDoc,updateDoc,serverTimestamp , arrayUnion, arrayRemove ,deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"
  

const firebaseConfig = {
  apiKey: "AIzaSyBKS56b_5eQoife1SvUpN2mJQ7lxDppzmI",
  authDomain: "login-page-5c83e.firebaseapp.com",
  projectId: "login-page-5c83e",
  storageBucket: "login-page-5c83e.firebasestorage.app",
  messagingSenderId: "923330659774",
  appId: "1:923330659774:web:0c0764235a05831ce825ef",
  measurementId: "G-EMR7MHZ6H7"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export { auth,getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup, GoogleAuthProvider,provider,getFirestore,db ,collection, addDoc,getDocs, doc, setDoc ,updateDoc,serverTimestamp, arrayUnion, arrayRemove,deleteDoc }
