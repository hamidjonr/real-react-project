// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1ZQ00jFjKdDzDE_nqK6gsCX0E38LZQbc",
    authDomain: "first-project-24-group.firebaseapp.com",
    projectId: "first-project-24-group",
    storageBucket: "first-project-24-group.appspot.com",
    messagingSenderId: "233578948880",
    appId: "1:233578948880:web:f0b042d91e665cdef65d95",
    measurementId: "G-WYGS1Y8G89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
