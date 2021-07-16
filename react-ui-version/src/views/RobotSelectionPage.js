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

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

import bot_v1_img from "assets/img/bot_v2.png";

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
      <Parallax small filter image={require("assets/img/bg_5.jpeg").default} />
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
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}></GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Card className={classes.root}>
                <CardActionArea href="/operator-page">
                  <CardMedia
                    component="img"
                    alt="Bilocation Bot v1"
                    height="100%"
                    image={bot_v1_img}
                    title="Bilocation Bot v1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
                      CS Department 
                      <br/>
                      ATR Lab
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button
                    href="/operator-page"
                    size="small"
                    color="primary"
                    style={{ backgroundColor: "green" }}
                  >
                    Online
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Bilocation Bot v1"
                    height="100%"
                    image={bot_v1_img}
                    title="Bilocation Bot v1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
                      CS Department 
                      <br/>
                      3rd Floor
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button
                    size="small"
                    color="primary"
                    style={{ backgroundColor: "red" }}
                  >
                    Offline
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Bilocation Bot v1"
                    height="100%"
                    image={bot_v1_img}
                    title="Bilocation Bot v1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
                      DI Hub 
                      <br/>
                      Entry
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button
                    size="small"
                    color="primary"
                    style={{ backgroundColor: "red" }}
                  >
                    Offline
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Bilocation Bot v1"
                    height="100%"
                    image={bot_v1_img}
                    title="Bilocation Bot v1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
                      Student Center 
                      <br/>
                      Bot-1
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button
                    size="small"
                    color="primary"
                    style={{ backgroundColor: "red" }}
                  >
                    Offline
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Bilocation Bot v1"
                    height="100%"
                    image={bot_v1_img}
                    title="Bilocation Bot v1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
                      Kent Campus 
                      <br/>
                      Bot-1
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button
                    size="small"
                    color="primary"
                    style={{ backgroundColor: "red" }}
                  >
                    Offline
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={11}>
              .
            </GridItem>
          </GridContainer>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
