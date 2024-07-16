const firebaseConfig = {
    apiKey: "AIzaSyANzJnopTxqUHVW2BBmT5xethl5oi6UV8I",
    authDomain: "inventory-app-aafd7.firebaseapp.com",
    projectId: "inventory-app-aafd7",
    storageBucket: "inventory-app-aafd7.appspot.com",
    messagingSenderId: "480387863608",
    appId: "1:480387863608:web:29ea2735daa93e475902cd"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
