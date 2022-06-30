import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddPhotoPage from "./pages/AddPhotoPage";
import DetailPage from "./pages/PhotoDetailPage";
import NotFound from "../../components/NotFound";

const Photo = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="add" element={<AddPhotoPage />} />
      <Route path=":photoId" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Photo;
