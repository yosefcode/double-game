import { useState } from "react";
import "./App.css";
import SideBar from "./component/sidebar/sidebar";
import Boxes from "./component/boxes/boxes";

function App() {
  const [point, setpoint] = useState();
  const [numfor, setNumfor] = useState();
  const [small_large, setSmall_large] = useState("boxsmall");
  const [hardTimer, setHardTimer] = useState(0);
  const [timer, setTimer] = useState(0);
  const [success_Point, setSuccess_Point] = useState(0);
  const [error_Point, setError_Point] = useState(0);
  const audioSuccess = new Audio("sound/success.mp3");
  const audioError = new Audio("sound/error.mp3");

  return (
    <div className="App">
      <SideBar
        setSmall_large={setSmall_large}
        setNumfor={setNumfor}
        point={point}
        audioError={audioError}
        audioSuccess={audioSuccess}
        setpoint={setpoint}
        timer={timer}
        setTimer={setTimer}
        hardTimer={hardTimer}
        setHardTimer={setHardTimer}
        numfor={numfor}
        error_Point={error_Point}
        setError_Point={setError_Point}
        success_Point={success_Point}
        setSuccess_Point={setSuccess_Point}
      />

      <Boxes
        numfor={numfor}
        small_large={small_large}
        audioError={audioError}
        audioSuccess={audioSuccess}
        setpoint={setpoint}
        point={point}
        timer={timer}
        setTimer={setTimer}
        hardTimer={hardTimer}
        setHardTimer={setHardTimer}
        error_Point={error_Point}
        setError_Point={setError_Point}
        success_Point={success_Point}
        setSuccess_Point={setSuccess_Point}
      />
    </div>
  );
}

export default App;
