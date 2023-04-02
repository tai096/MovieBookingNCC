import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyChNaKL8422Mb3UFwx4ef3O1VFgS-1iwkA",
  authDomain: "moviebookingncc.firebaseapp.com",
  projectId: "moviebookingncc",
  storageBucket: "moviebookingncc.appspot.com",
  messagingSenderId: "888691488951",
  appId: "1:888691488951:web:70a9662b568bf78671f532",
  measurementId: "G-578T7L4B3T",
  databaseURL:
    "https://moviebookingncc-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getDatabase(app);
export const storage = getStorage(app);
