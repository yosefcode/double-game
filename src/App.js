import { useState } from "react";
import "./App.css";
import SideBar from "./component/sidebar/sidebar";
import Boxes from "./component/boxes/boxes";

function App() {
  const [point, setpoint] = useState(0);
  const [numfor, setNumfor] = useState(9);
  const [small_large, setSmall_large] = useState("boxsmall");
  const [audioSuccess] = useState(new Audio("sound/success.mp3"));
  const [audioError] = useState(new Audio("sound/error.mp3"));

  return (
    <div className="App">
      <SideBar
        setSmall_large={setSmall_large}
        setNumfor={setNumfor}
        point={point}
        audioError={audioError}
        audioSuccess={audioSuccess}
        setpoint={setpoint}
      />

      <Boxes
        numfor={numfor}
        small_large={small_large}
        audioError={audioError}
        audioSuccess={audioSuccess}
        setpoint={setpoint}
        point={point}
      />
    </div>
  );
}

export default App;
