import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import tech_bot from "../../assets/tech_bot.gif";
import map_img from "../../assets/wallpaper_1.jpeg";

class HomeBody extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row style={{marginTop: "3%"}}>
          <img src={map_img} style={{marginLeft:"5%", width: "70vw", height: "10vh"}} />
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={tech_bot} />
              <Card.Body>
                <Card.Title>Welcome to My Space</Card.Title>
                <Card.Text>
                  Take a seat in your stem chair, and just with the poswer of point and click.
                  You can control your surrogate and send it out into the real world.
                  <h6><i>You Can Live Your Life WITHOUT LIMITATION.</i></h6>
                </Card.Text>
                <Button variant="primary" href="https://www.atr.cs.kent.edu/" target="_blank">Vist the Hatchery</Button>
              </Card.Body>
            </Card>
        </Row>
      </div>
    );
  }
}

export default HomeBody;
