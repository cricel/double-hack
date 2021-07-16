import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Live Without Limit</h2>
            <h4>
              Take a seat in your stem chair and just with the power of few mouse click.
              You can control your surrogate and send it out into the real world.
              <br/>
              You can live your life without limitation.
              <br/>
              You see what they see.
              <br/>
              Feel what they feel.
              <br/>
              And be anywhere you want to be from the comfort and safety of your own home.
              You can finally go to the place you've always dreamt of without any physcial travel.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
