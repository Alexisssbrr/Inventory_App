// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0xaBUE6y_2kSm2_R90KTKH2ioZoqKUwU",
    authDomain: "inventoryapp-pi.firebaseapp.com",
    projectId: "inventoryapp-pi",
    storageBucket: "inventoryapp-pi.appspot.com",
    messagingSenderId: "924322340580",
    appId: "1:924322340580:web:06d87754a2f84abc27d6f1",
    measurementId: "G-5QESTMHTMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
