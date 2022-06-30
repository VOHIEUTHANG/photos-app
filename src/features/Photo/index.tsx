import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import AddPhotoPage from "./pages/AddEdit";
import DetailPage from "./pages/Detail";
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
