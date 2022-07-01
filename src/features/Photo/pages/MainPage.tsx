import Banner from "components/Banner";
import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "app/store";
import PhotoList from "../components/PhotoList";
import { Divider, Typography } from "antd";
const MainPhoto = () => {
  const photos = useSelector((state: RootState) => state.photos);
  return (
    <div>
      <Banner
        title="Your awesome photos"
        backgroundUrl="https://images.wallpaperscraft.com/image/single/boat_sea_view_from_above_water_119937_1920x1080.jpg"
      />
      <Divider />
      <PhotoList photoList={photos} />
    </div>
  );
};

export default MainPhoto;
