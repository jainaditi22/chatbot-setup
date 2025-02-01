// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDeMX0L3SvFZQkhyKv7KfO6eAD-IWJtS1g",
    authDomain: "chatbot-setup-10301.firebaseapp.com",
    projectId: "chatbot-setup-10301",
    storageBucket: "chatbot-setup-10301.firebasestorage.app",
    messagingSenderId: "823325902232",
    appId: "1:823325902232:web:bd874ded5403f419f4d7ed",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };