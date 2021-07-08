import React, { Component } from "react";
import Zoom from "./Zoom";

class ZoomPage extends Component {
  state = {
    joinMeeting: false,
  };

  render() {
    return (
      <div>
        {this.state.joinMeeting ? (
          <Zoom />
        ) : (
          <div>
            {/* <img src={centerAnimation} className="App-logo" alt="logo" /> */}
            <button
              onClick={() => this.setState({ joinMeeting: true })}
            >
              Remote Connect
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ZoomPage;
