import React, { Component } from "react";
import Alert from "@material-ui/lab/Alert";
import Config from "scripts/config";

class Connection extends Component {
  state = {
    connected: false,
    ros: null,
  };

  constructor() {
    super();
    this.init_connection();
  }

  init_connection() {
    this.state.ros = new window.ROSLIB.Ros();
    // this.setState({
    //   ros: new window.ROSLIB.Ros(),
    // });

    this.state.ros.on("connection", () => {
      console.log("connection established");

      this.setState({ connected: true });
    });

    this.state.ros.on("close", () => {
      console.log("connection is closed");
      this.setState({ connected: false });

      //try to reconnect every 3 sec
      setTimeout(() => {
        try {
          this.state.ros.connect(
            "ws://" +
              Config.ROSBRIDGE_SERVER_IP +
              ":" +
              Config.ROSBRIDGE_SERVER_PORT
          );
        } catch (error) {
          console.log("connection problem");
        }
      }, Config.RECONNECTION_TIMER);
    });

    try {
      this.state.ros.connect(
        "ws://" +
          Config.ROSBRIDGE_SERVER_IP +
          ":" +
          Config.ROSBRIDGE_SERVER_PORT
      );
    } catch (error) {
      console.log("connection problem");
    }
  }

  render() {
    return (
      <div>
        <Alert severity={this.state.connected ? "success" : "error"}>
          {this.state.connected
            ? "Your Robot is Online, Please Enjoy The Ride"
            : "Your Robot is having Some Trouble Finding You Over the Crowd, Please Patiently Wait for Your Robot to Locate You"}
        </Alert>
      </div>
    );
  }
}

export default Connection;
