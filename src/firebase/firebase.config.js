
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBr2jwe2l1BKHciMpJ0pzmapsAHJRSkn5E",
  authDomain: "technovision-fb0bc.firebaseapp.com",
  projectId: "technovision-fb0bc",
  storageBucket: "technovision-fb0bc.appspot.com",
  messagingSenderId: "618017231140",
  appId: "1:618017231140:web:7279f0a508b231429723b1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;