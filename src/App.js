import { useState } from "react";
import "./App.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function App() {
  const [point, setpoint] = useState(0);
  const [numfor, setNumfor] = useState(9);
  const [sizeimg, setSizeimg] = useState(100);
  const [state, setState] = useState(false);

  const handleChange = () => {
    state === false ? Hard() : easy();
  };

  const Hard = () => {
    setState(true);
    setNumfor(16);
    setSizeimg(70);
  };

  const easy = () => {
    setState(false);
    setNumfor(9);
    setSizeimg(100);
  };

  let audioSuccess = new Audio("sound/success.mp3");
  let audioError = new Audio("sound/error.mp3");

  const imageNames = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",
    "21.png",
    "22.png",
    "23.png",
    "24.png",
    "25.png",
    "26.png",
    "27.png",
    "28.png",
    "29.png",
    "30.png",
    "31.png",
    "32.png",
    "33.png",
    "34.png",
    "35.png",
    "36.png",
    "37.png",
    "38.png",
    "39.png",
    "40.png",
    "41.png",
    "42.png",
    "43.png",
    "44.png",
    "45.png",
    "46.png",
    "47.png",
    "48.png",
    "49.png",
    "50.png",
    "51.png",
    "52.png",
    "53.png",
    "54.png",
    "55.png",
    "56.png",
    "57.png",
    "58.png",
    "59.png",
    "60.png",
  ];

  const success = () => {
    setpoint(point + 10);
    audioSuccess.play();
  };

  const error = () => {
    setpoint(point - 10);
    audioError.play();
  };

  const testBox1 = (numClick) => {
    const foundBox2 = box2.find((images) => images === numClick);
    foundBox2 ? success() : error();
  };
  const testBox2 = (numClick) => {
    const foundBox1 = box1.find((images) => images === numClick);
    foundBox1 ? success() : error();
  };

  var same = imageNames[Math.floor(Math.random() * imageNames.length)];

  var box1 = [same];
  for (var i = 0; i < imageNames.length; i++) {
    var idx = imageNames[Math.floor(Math.random() * imageNames.length)];

    let test = box1.find((e) => e === idx);
    if (!test && box1.length < numfor) {
      box1.push(idx);
    }
  }

  const listBox1 = box1.sort(() => Math.random() - 0.5);

  var box2 = [same];
  for (var i = 0; i < imageNames.length; i++) {
    var idx = imageNames[Math.floor(Math.random() * imageNames.length)];
    let test = box2.find((e) => e === idx);
    let test1 = box1.find((e) => e === idx);
    if (!test && !test1 && box2.length < numfor) {
      box2.push(idx);
    }
  }
  const listBox2 = box2.sort(() => Math.random() - 0.5);

  return (
    <div className="App">
      <br />
      <div className="point">
        <div className="switch">
          {`קל`}
          {"   "}
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                color="primary"
              />
            }
            label="קשה"
          />
        </div>
        {point}
      </div>
      <br />
      <div className="box1">
        {" "}
        {listBox1.map((numClick, index) => (
          <img
            className="imgbox"
            key={index}
            src={`img/${numClick}`}
            width={sizeimg}
            height={sizeimg}
            onClick={() => {
              testBox1(numClick);
            }}
          />
        ))}{" "}
      </div>
      <div className="box2">
        {" "}
        {listBox2.map((numClick, index) => (
          <img
            className="imgbox"
            key={index}
            src={`img/${numClick}`}
            width={sizeimg}
            height={sizeimg}
            onClick={() => {
              testBox2(numClick);
            }}
          />
        ))}
      </div>{" "}
    </div>
  );
}

export default App;
