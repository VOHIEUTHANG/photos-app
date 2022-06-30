import React, { Suspense } from "react";
import "./App.scss";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import { app, db } from "./firebase";

const photosCol = collection(db, "photos");
(async () => {
  const photoSnapshot = await getDocs(photosCol);
  const photoList = photoSnapshot.docs.map((doc) => doc.data());
  console.log("🚀 ~ file: index.ts ~ line 21 ~ snapshot", photoList);
})();

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ....</div>}>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/photos" replace />} />
              <Route path="photos/*" element={<Photo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
