// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.react_app_api_Key,
  authDomain:process.env.react_app_auth_Domain,
  projectId:process.env.react_app_project_Id,
  storageBucket:process.env.react_app_storage_Bucket,
  messagingSenderId:process.env.react_app_messaging_Sender_Id,
  appId:process.env.react_app_app_Id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;