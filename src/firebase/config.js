import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuuSADahTnA5GyDgE51jjpKZ03yDAFzfY",
  authDomain: "kreics-image-gallery.firebaseapp.com",
  projectId: "kreics-image-gallery",
  storageBucket: "kreics-image-gallery.appspot.com",
  messagingSenderId: "876769202680",
  appId: "1:876769202680:web:627782e465dd8fb5b0c60d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db };