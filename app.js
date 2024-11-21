// app.js

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider, provider, getFirestore,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,serverTimestamp , arrayUnion, arrayRemove,deleteDoc
  
} from "./firebase.js";


let signUp = () => {
  console.log("Attempting to sign up...");


  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cPassword = document.getElementById("confirm_pass").value;
  let name = document.getElementById("Username").value;

  // Regex for validation
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

 
  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return;
  }
  if (!passwordRegex.test(password)) {
    alert("Password must be 6-16 characters, include numbers and special characters.");
    return;
  }
  if (password !== cPassword) {
    alert("Passwords do not match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created:", user);
      alert("Account created successfully!");
    })
    .catch((error) => {
      console.error("Signup error:", error.message);
      alert(`Signup failed: ${error.code}`);
    });
};


let logIn = () => {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User logged in:", userCredential.user);
      alert("Login successful!");
      window.location.href = "./dashboard.html"; 
    })
    .catch((error) => {
      console.error("Login error:", error.message);
      alert(`Login failed: ${error.code}`);
    });
};

// Event listeners for buttons
let signUpBtn = document.getElementById("signUp_btn");
if (signUpBtn) {
  signUpBtn.addEventListener("click", signUp);
}

let loginBtn = document.getElementById("login_btn");
if (loginBtn) {
  loginBtn.addEventListener("click", logIn);
}

let googleSignup = () => {
  signInWithPopup(auth, provider)
    .then(async(result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      // window.location.href = "./class27/index.html";
      try {
        await setDoc(doc(db, "users", user.uid), {
          uid:user.uid,
          name : user.displayName,
          email : user.email,
      
  
        });
          console.log("Document written with ID: ", user.uid);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
  

    })
    .catch((error) => {
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(email, credential);
    });
};
  let googleBtn = document.getElementById("googleSignIn_btn");
  googleBtn.addEventListener("click", googleSignup);
export { signUp, logIn,  };
