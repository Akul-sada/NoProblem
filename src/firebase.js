// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaRlL1Bp7LNdt2EVN0UNDgRN24_LqZ7B4",
  authDomain: "iptracker-c47de.firebaseapp.com",
  projectId: "iptracker-c47de",
  storageBucket: "iptracker-c47de.firebasestorage.app",
  messagingSenderId: "612793291244",
  appId: "1:612793291244:web:b64020d7229010a774b0c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const database = getDatabase(app);
