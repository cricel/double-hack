import { ZoomMtg } from "@zoomus/websdk";
import { useEffect } from "react";

// generate signature
const crypto = require("crypto"); // crypto comes with Node.js

function generateSignature(apiKey, apiSecret, meetingNumber, role) {
  return new Promise((res, rej) => {
    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString(
      "base64"
    );
    const hash = crypto
      .createHmac("sha256", apiSecret)
      .update(msg)
      .digest("base64");
    const signature = Buffer.from(
      `${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`
    ).toString("base64");

    res(signature);
  });
}

var apiKey = "A1ntiNG3QVGeYQBRnaTlTQ";
var apiSecret = "DxtU3kFxL2vLVMqn0LVG2g1NLbLQ6zmEMXDG";
var meetingNumber = 5665382813;
var role = 0;
var leaveUrl = "http://localhost:3000/";
var userName = "WebSDK";
var userEmail = "test@gmail.com";
var passWord = "QJ52vS";

var signature = "";
generateSignature(apiKey, apiSecret, meetingNumber, role).then((res) => {
  signature = res;
});

const Zoom = () => {
  useEffect(() => {
    showZoomDiv();
    ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.5/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    initiateMeeting();
  }, []);

  const showZoomDiv = () => {
    document.getElementById("zmmtg-root").style.display = "block";
  };

  const initiateMeeting = () => {
    ZoomMtg.init({
      leaveUrl: leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          userEmail: userEmail,
          passWord: passWord,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  return <div>Zoomdf</div>;
};

export default Zoom;
