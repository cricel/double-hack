import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import dancing_bot from "../../assets/wallpaper_2_v2.jpeg";
import banner_1 from "../../assets/banner_1.jpeg";

import './HomeHeader.css';

class Front extends Component {
  state = {};
  render() {
    return (
      <div>
        <Carousel fade>
          <Carousel.Item className="carouselItem">
            <img
              className="d-block w-100"
              src={banner_1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselItem">
            <img
              className="d-block w-100"
              src={dancing_bot}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselItem">
            <img
              className="d-block w-100"
              src={dancing_bot}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Front;
