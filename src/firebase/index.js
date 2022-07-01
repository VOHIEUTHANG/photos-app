import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyDOWsv9RUo3TitbtUZbf9zbqsqzAMhpdjA",
  authDomain: "photos-app-d46e4.firebaseapp.com",
  projectId: "photos-app-d46e4",
  storageBucket: "photos-app-d46e4.appspot.com",
  messagingSenderId: "647854868174",
  appId: "1:647854868174:web:88c31985d156981ba8b29f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getPhotos(db) {
  const citiesCol = collection(db, "photos");
  const citySnapshot = await getDocs(citiesCol);
  const photoList = citySnapshot.docs.map((doc) => doc.data());
  return photoList;
}
