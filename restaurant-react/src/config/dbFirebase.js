// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOv-78uNpyFeJIEf6dWbu0j7bfGNv_R04",
    authDomain: "restaurant-c73ce.firebaseapp.com",
    projectId: "restaurant-c73ce",
    storageBucket: "restaurant-c73ce.appspot.com",
    messagingSenderId: "21180108575",
    appId: "1:21180108575:web:b374a8089c4d2932946a2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;