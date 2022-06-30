import React from "react";
import { Button } from "antd";
import "./PhotoCard.scss";
import { PhotoType } from "types/stateType";

function PhotoCard({ photo }: { photo: PhotoType }) {
  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 style={{ color: "white" }} className="photo__title">
          {photo.title}
        </h3>

        <div className="photo__actions">
          <div>
            <Button color="light">Edit</Button>
          </div>

          <div>
            <Button color="danger">Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
