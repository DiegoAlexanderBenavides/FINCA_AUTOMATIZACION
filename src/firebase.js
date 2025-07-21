// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZbNdKM93yXgv87tWrH6Ecqbh4N-rAnLI",
  authDomain: "Tfinca-ab804.firebaseapp.com",
  databaseURL: "https://finca-ab804-default-rtdb.firebaseio.com",
  projectId: "finca-ab804",
  storageBucket: "finca-ab804.firebasestorage.app",
  messagingSenderId: "507128749680",
  appId: "1:507128749680:web:5e616abd30e7f8336d1eb5"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, get, child };
