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

//collection ref
const colRef = collection(db, 'feedbacks')

onSnapshot(colRef, (snapshot) =>{
  let feedbacks = [];
    snapshot.docs.forEach((doc) => {
      feedbacks.push({ ...doc.data(), id: doc.id })
    })
    console.log(feedbacks)

})

// adding documents
const addinputs = document.querySelector(".add");
addinputs.addEventListener("submit", (e) =>{
    e.preventDefaultDefault()
    const email = loginform.email.value
    const password = loginform.password.value
    const feedback = loginform.email.value

    addDoc(colRef, {
      name: addinputs.name.value,
      email: addinputs.email.value,
      feedback: addinputs.feedback.value,
  })
  .then(() => {
    addinputs.reset()
  })
})


