import React, { useState } from "react";
import { Jutsu } from "react-jutsu";

const Jitsi = () => {
  const [room, setRoom] = useState("atrtewewsttest123");
  const [name, setName] = useState("Xiangxu Lin");
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <Jutsu
      containerStyles={{ width: "100%", height: "500px"}}
      roomName={room}
      displayName={name}
      password={password}
      onMeetingEnd={() => console.log("Meeting has ended")}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>}
    />
  );
};

export default Jitsi;
