// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWRipOfeX49E8RWWcHBRj7zkR89aG32UU",
    authDomain: "learn-with-rony-8475e.firebaseapp.com",
    projectId: "learn-with-rony-8475e",
    storageBucket: "learn-with-rony-8475e.appspot.com",
    messagingSenderId: "436971210321",
    appId: "1:436971210321:web:b2391ed16418e325bd5a70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;