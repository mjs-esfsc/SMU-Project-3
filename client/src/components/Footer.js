import React from "react";
import { Layout, Button, Row, Col } from "antd";
// Here we are importing a CSS file as a dependency
import "./styles/Header.css";

function Footer() {
  return (
    <footer
      className="footerInfo"
      style={{ background: "#262626", color: "white" }}
    >
      <Row className="gradient1">
        <Col
          span={12}
          style={{ margin: "auto", paddingLeft: "3%", paddingRight: "3%" }}
        >
          <h1 style={{ color: "white", fontSize: "50px", margin: "auto" }}>
            The Team:
          </h1>
          <ul style={{ fontSize: "20px" }}>
            <li>Mark Sammis</li>
            <li>Martin Bedoya</li>
            <li>Talhah Awan</li>
            <li>Alexander Umnov</li>
            <li>Allen Cheslik</li>
          </ul>
        </Col>
        <Col span={12}>
          <h1
            style={{
              color: "white",
              float: "right",
              fontSize: "250%",
              marginTop: "5%",
              marginRight: "5%",
            }}
          >
            “Wherever you go, go with all your heart!” -Confucius
          </h1>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
