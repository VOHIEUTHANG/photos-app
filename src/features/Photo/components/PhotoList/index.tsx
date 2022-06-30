import React from "react";
import { Row, Col } from "antd";
import PhotoCard from "../PhotoCard";
import { PhotoType } from "types/stateType";

function PhotoList({ photoList }: { photoList: PhotoType[] }) {
  return (
    <div className="container">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {photoList.map((photo) => (
          <Col
            key={photo.title}
            xs={{ span: 12 }}
            md={{ span: 8 }}
            xl={{ span: 6 }}
          >
            <PhotoCard photo={photo} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PhotoList;
