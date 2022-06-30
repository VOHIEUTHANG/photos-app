import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { Typography } from "antd";
import { Select } from "antd";
import Banner from "components/Banner";
const { Title } = Typography;
const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const PhotoAddEdit = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onCategoryChange = (value: string) => {
    console.log("On Category Change: ", value);
  };
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

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
            <Input onChange={onTitleChange} />
          </Form.Item>
          <Form.Item name={"category"} label="Category">
            <Select
              placeholder="What is your photo category?"
              onChange={onCategoryChange}
              allowClear
            >
              <Option value="technology">Technology</Option>
              <Option value="education">Education</Option>
              <Option value="nature">Nature</Option>
              <Option value="animals">Animals</Option>
              <Option value="styles">Styles</Option>
            </Select>
          </Form.Item>
          <Form.Item name={"photo"} label="Photo">
            <Button>Random a photo</Button>
            <div style={{ marginTop: "20px" }}>
              <img
                width="200px"
                height="200px"
                src="https://images.wallpaperscraft.com/image/single/palm_tree_branch_tropics_111142_1920x1080.jpg"
                alt="Photot"
              />
            </div>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PhotoAddEdit;
