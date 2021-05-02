import { useState } from "react";
import "./App.css";
import SideBar from "./component/sidebar/sidebar";
import Boxes from "./component/boxes/boxes";

function App() {
  const [point, setpoint] = useState(0);
  const [numfor, setNumfor] = useState(9);
  const [small_large, setSmall_large] = useState("boxsmall");
  const [audio, setAudio] = useState(true);

  return (
    <div className="App">
      <SideBar
        setSmall_large={setSmall_large}
        audio={audio}
        setAudio={setAudio}
        setNumfor={setNumfor}
        point={point}
      />

      <Boxes
        numfor={numfor}
        small_large={small_large}
        audio={audio}
        setpoint={setpoint}
        point={point}
      />
    </div>
  );
}

export default App;
