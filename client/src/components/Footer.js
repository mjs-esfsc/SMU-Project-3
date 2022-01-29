import React from "react";
import { Layout, Button, Row, Col } from 'antd';
// Here we are importing a CSS file as a dependency
import "./styles/Header.css";

function Footer() {
  return (
    <footer style={{background: '#262626', color: 'white'}}>
      <p>Copyright</p>
    </footer>
  );
}

export default Footer;
