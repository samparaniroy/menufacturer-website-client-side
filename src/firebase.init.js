// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKRMt0WnS1G4DZPz7ezPck3VrDjwb8nVw",
  authDomain: "manufacturer-website-36f9c.firebaseapp.com",
  projectId: "manufacturer-website-36f9c",
  storageBucket: "manufacturer-website-36f9c.appspot.com",
  messagingSenderId: "585528436894",
  appId: "1:585528436894:web:57ec1c4344367968f4f38f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;