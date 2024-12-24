import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCk9nmTrHYTf2VK3OgNJu2I98o8mDK6e3c",
    authDomain: "mealmeats.firebaseapp.com",
    projectId: "mealmeats",
    storageBucket: "mealmeats.firebasestorage.app",
    messagingSenderId: "241176807847",
    appId: "1:241176807847:web:838ab787ca644846ea4e82"
};

const app = initializeApp(firebaseConfig);
export default app;