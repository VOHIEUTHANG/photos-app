import React from "react";
import "./Banner.scss";
type BannerProps = {
  title: string;
  backgroundUrl?: string;
};
const Banner = ({ title, backgroundUrl }: BannerProps) => {
  return (
    <section
      className="banner"
      style={backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : {}}
    >
      <h1 className="banner__title">{title}</h1>
    </section>
  );
};

export default Banner;
