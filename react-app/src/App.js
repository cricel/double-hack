import NavHeader from "./components/NavHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import './New.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

// import Zoom from "./components/Zoom";

// import { useState } from "react";

// function App() {
//   const [joinMeeting, setJoinMeeting] = useState(false);

//   return (
//     <div className="App">
//       {/* <img src={logo} className="Fix-logo" alt="logo" /> */}

//       {joinMeeting ?
//         (<Zoom />) :
//         (
//           // <header className="App-header">
//           //   <img src={centerAnimation} className="App-logo" alt="logo" />
//             <button className="button buttonBlue" onClick={() => setJoinMeeting(true)} >Remote Connect</button>
//           // </header>
//         )}

//     </div>
//   );
// }

// export default App;