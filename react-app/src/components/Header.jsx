import React, { Component } from "react";
import dancing_bot from "../assets/dancing_bot.gif";
import { Row, Col } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col>
          <div className="header">
            <img src={dancing_bot} />
            <h1>ATR</h1>
          </div>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Header;
