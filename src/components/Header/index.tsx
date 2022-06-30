import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Col, Row } from "antd";
import "antd/dist/antd.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Row justify="space-between">
          <Col>
            <NavLink className="header__link  header__title" to="/photos">
              Photo App
            </NavLink>
          </Col>
          <Col>
            <NavLink className="header__link" to="/photos/add">
              Add Photos
            </NavLink>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
