import React, { Component } from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";
import RobotState from "./RobotState";
import Map from "./Map";
import { Row, Col, Container, Button } from "react-bootstrap";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container>
          <h1 className="text-center"> Home</h1>
          <Row>
            <Col>
              <Connection />
            </Col>
          </Row>

          <Row>
            <Col>
              <Teleoperation />
            </Col>
          </Row>
          <Row>
            <Col>
              <RobotState />
            </Col>
            <Col>
              <h1>Map</h1>
              <Map />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
