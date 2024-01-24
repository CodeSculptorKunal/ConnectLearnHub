// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import{ getFirestore,collection,getDocs,getDoc, addDoc, doc, deleteDoc ,onSnapshot, query, where, orderBy, updateDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
import { getAuth,createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'


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

//  logging out
const logoutbutton = document.querySelector('.logout')
logoutbutton.addEventListener('click', () =>{
    signOut(auth)
        .then(() => {
            console.log('the user signed out')
            window.location.href = 'http://127.0.0.1:5500/homepage.html'
        })

        .catch((err) =>{
            console.log(err.message)
        })
})



// subscribing to auth changes

onAuthStateChanged(auth, (user) => {
    console.log('user status changed:', user)


})
















let logout = document.querySelector(".logout");

logout.addEventListener("click",function(){
    // prompt("Are you Sure you want to logout")
    confirm("Are you Sure you want to logout")
})