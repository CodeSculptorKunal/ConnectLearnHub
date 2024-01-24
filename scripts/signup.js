// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import{ getFirestore,collection,getDocs,getDoc, addDoc, doc, deleteDoc ,onSnapshot, query, where, orderBy, updateDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
import { getAuth,createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1eWvOt5ddgKIP1mWb_B7BTm6RItGNtjA",
  authDomain: "connect-learn-hub.firebaseapp.com",
  projectId: "connect-learn-hub",
  storageBucket: "connect-learn-hub.appspot.com",
  messagingSenderId: "560070615109",
  appId: "1:560070615109:web:e5c1da87857ff1569b832c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// initialize services
const db = getFirestore();
const auth = getAuth();



// signing up

const signupform = document.querySelector(".form-box");
signupform.addEventListener("submit", (e) =>{
  e.preventDefault()
  const email = signupform.email.value
  const password = signupform.password.value
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('user created:', cred.user)

      signupform.reset()
    })
    .catch((err) => {
      console.log(err.message)
    })


})








let subBtn = document.querySelector(".sub-btn");

subBtn.addEventListener("click", function(){
    alert("Congratulations,You Successfully Signed Up")
})
