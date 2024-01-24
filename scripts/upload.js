
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import{ getFirestore,collection,getDocs,getDoc, addDoc, doc, deleteDoc ,onSnapshot, query, where, orderBy, updateDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
import { getAuth,createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import { getStorage, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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

// Get a reference to the storage service
const storage = firebase.storage();



let submit = document.querySelector(".btn")
function uploadFile() {
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    

    if (file) {
        // Create a storage reference
        const storageRef = storage.ref('uploads/' + file.name);

        // Upload file
        storageRef.put(file).then(() => {
            console.log('File uploaded successfully');
        }).catch((error) => {
            console.error('Error uploading file:', error);
        });
    } else {
        console.warn('No file selected');
    }
}

submit.addEventListener("click", uploadFile())




