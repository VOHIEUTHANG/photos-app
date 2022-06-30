import React, { Suspense } from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

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
              <Route path="/photos/*" element={<Photo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
