import React, { Component } from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";
import RobotState from "./RobotState";
import Map from "./Map";
import Jitsi from "./Jitsi";
import { Row, Col, Container, Button } from "react-bootstrap";

class Operation extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Connection />
            </Col>
          </Row>
          <Row>
            <Col>
              <Jitsi />
            </Col>
            <Col>
              <Row>
                <Teleoperation />
                <p></p>
                <p></p>
              </Row>
              <Row>
                <h1 className="text-center">Navgation Map</h1>
                <Map />
              </Row>
            </Col>
          </Row>

          {/* <Row>
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
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default Operation;
