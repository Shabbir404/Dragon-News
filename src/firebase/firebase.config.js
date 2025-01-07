// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPKSfELpx83zScQq9vkv_S9RK4UXZIP0k",
    authDomain: "dragon-news-3e4ee.firebaseapp.com",
    projectId: "dragon-news-3e4ee",
    storageBucket: "dragon-news-3e4ee.firebasestorage.app",
    messagingSenderId: "489549078183",
    appId: "1:489549078183:web:c0cc308c1224afb76b8582",
    measurementId: "G-83DZ5KNBW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;