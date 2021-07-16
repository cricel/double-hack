import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import { Container } from "react-bootstrap";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeBody />
      </div>
    );
  }
}

export default Footer;
