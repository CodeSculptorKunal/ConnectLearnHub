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


// logging in

const loginform = document.querySelector(".form-inner")
loginform.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = loginform.email.value
    const password = loginform.password.value

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user logged in: ', cred.user)
            window.location.href = 'http://127.0.0.1:5500/userdashboard.html';
        })
        .catch((err) => {
            console.log(err.message)
        })

})


// subscribing to auth changes

onAuthStateChanged(auth, (user) => {
    console.log('user status changed:', user)


})


let subBtn = document.querySelector(".login-btn");
let input = document.querySelectorAll("input");
// console.dir(input);

subBtn.addEventListener("click",function(){
    let n=2;
    for(let i=0; i<2; i++){
        let val=input[i].value
        if(val==""){
            n--;
            
        }
    }
    if(n!=2){
        alert("Please Fill All the Entries")
    }
    else if(n==2){
        alert("Congratulations! You have successfully signed up for our forum community. We're thrilled to have you on board.Feel free to explore the various sections, connect with other users, and share your thoughts and experiences.Happy forum-ing!")

    }

})
