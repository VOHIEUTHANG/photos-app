import React, { useState } from "react";
import { Button, Form, Input, Typography, Select } from "antd";
import { useNavigate } from "react-router-dom";
import Banner from "components/Banner";
import { useDispatch } from "react-redux";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { addPhoto } from "../PhotoSlice";
const { Title } = Typography;
const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const PhotoAddEdit = () => {
  const [photoURL, setPhtotoURL] = useState(
    "https://images.wallpaperscraft.com/image/single/palm_tree_branch_tropics_111142_1920x1080.jpg"
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async <
    E extends { title: string; photo: string; id: number; categoryId: number }
  >(
    values: E
  ) => {
    values.photo = photoURL;
    values.id = Math.floor(Math.random() * 10000);
    const addPhotoAction = addPhoto(values);
    dispatch(addPhotoAction);
    const result = await sleep(1000);
    return navigate("/");
  };
  // const onCategoryChange = (value: string) => {
  //   console.log("On Category Change: ", value);
  // };
  // const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  // };

  return (
    <div>
      <Banner title="Add your awesome photos" />
      <Title
        level={3}
        style={{
          textAlign: "center",
          margin: "20px 0",
          textTransform: "uppercase",
        }}
        type="secondary"
      >
        Add Your Photos
      </Title>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item name={"title"} label="Title">
            <Input />
          </Form.Item>
          <Form.Item name={"categoryId"} label="Category">
            <Select placeholder="What is your photo category?" allowClear>
              {PHOTO_CATEGORY_OPTIONS.map((option) => {
                return (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item label="Photo">
            <Button
              onClick={(e) => {
                const randomNumber = Math.floor(Math.random() * 100) + 1;
                const randomPhoto = `https://picsum.photos/300/300?random=${randomNumber}`;
                setPhtotoURL(randomPhoto);
              }}
            >
              Random a photo
            </Button>
            <div style={{ marginTop: "20px" }}>
              <img
                width="100%"
                style={{ objectFit: "cover" }}
                height="300px"
                src={photoURL}
                alt="Photot"
              />
            </div>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
            <Button type="primary" htmlType="submit">
              Add to album
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PhotoAddEdit;
