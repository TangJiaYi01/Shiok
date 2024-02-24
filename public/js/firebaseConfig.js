import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyB8rdFuZFjdGJxCP829dhVjKfNKnIfuyQE",
  authDomain: "shiok-ah.firebaseapp.com",
  projectId: "shiok-ah",
  storageBucket: "shiok-ah.appspot.com",
  messagingSenderId: "238095376133",
  appId: "1:238095376133:web:57039ed53990d3a41be16c",
  measurementId: "G-P22X8YRJPV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a firestore instance
const db = getFirestore(app);

export { db };
export default firebaseConfig;