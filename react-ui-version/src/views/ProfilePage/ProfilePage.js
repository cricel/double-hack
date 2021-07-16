import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/circle-cropped.png";

import Jitsi from "components/Jitsi/Jitsi";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import Connection from "components/ROS/Connection";
import Teleoperation from "components/ROS/Teleoperation";
import Map from "components/ROS/Map";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Bilocation Bot"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          {/* <div className={classes.container}> */}
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Xiangxu Lin</h3>
                  <h6>CS-Bot-1</h6>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={11}>
              <div>
                <Connection />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={11}>
              .
            </GridItem>
            <GridItem xs={12} sm={7} md={7}>
              <Jitsi />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={9}>
                  <div>
                    <h5>
                      Please use left button to manual control the robot.➡️
                      <br />
                      and click on map below for autonomous navigation. ⬇️
                    </h5>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={4} md={3}>
                  <Teleoperation />
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                  <Map />
                </GridItem>
              </GridContainer>
            </GridItem>
            {/* <GridItem xs={12} sm={4} md={3}>
              <div>
                <h5>
                  Please use left button to manual control the robot.➡️
                  <br/>
                  and click on map below for autonomous navigation. ⬇️
                </h5>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={1}>
              <Teleoperation />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Map />
            </GridItem> */}
          </GridContainer>
          <div></div>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
