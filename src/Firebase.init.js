// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnjYYGBS8KH1-JiWubWEHfIw56q6X97as",
  authDomain: "dental-auth-assignment.firebaseapp.com",
  projectId: "dental-auth-assignment",
  storageBucket: "dental-auth-assignment.appspot.com",
  messagingSenderId: "832948448953",
  appId: "1:832948448953:web:29b685079fec75feb47568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;