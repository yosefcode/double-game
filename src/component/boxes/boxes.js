import "./boxes.css";
import React, { useState, useEffect } from "react";
import GifSuccess from "./Line Stickers & Themes.gif";
import GifError from "./thumbs-down-emoji-unscreen.gif";
function Boxes(props) {
  const {
    numfor,
    audioSuccess,
    audioError,
    small_large,
    point,
    setpoint,
    timer,
    setTimer,
    hardTimer,
    setHardTimer,
    success_Point,
    setSuccess_Point,
    error_Point,
    setError_Point,
  } = props;

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

  const [listBox1, setListBox1] = useState([]);
  const [listBox2, setListBox2] = useState([]);
  const [gifSuccess, setGifSuccess] = useState(false);
  const [intervalval, setIntervalval] = useState();
  const [gifError, setGifError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [valBtnPause, setValBtnPause] = useState("עצור משחק");

  const startInterval = () => {
    var interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    setIntervalval(interval);
  };

  const clear_Interval = () => {
    clearInterval(intervalval);
  };
  console.log(timer);

  useEffect(() => {
    if (timer === -1) {
      error();
    }
  }, [timer, setTimer]);

  const start = () => {
    setDisable(false);
    clear_Interval();
    setSuccess_Point(0);
    setError_Point(0);
    loadBox1();
    loadBox2();
    setTimer(hardTimer);
    startInterval();
    // setIntervalval();
  };

  const success = () => {
    setSuccess_Point(success_Point + 1);
    loadBox1();
    loadBox2();
    setTimer(hardTimer);
    clear_Interval();
    setGifSuccess(true);
    setTimeout(function () {
      setGifSuccess(false);
      startInterval();
    }, 1000);
    // audioSuccess.play();
  };

  const error = () => {
    setTimer(hardTimer);
    setError_Point(error_Point + 1);
    loadBox1();
    loadBox2();
    clear_Interval();
    setGifError(true);
    setTimeout(function () {
      setGifError(false);
      startInterval();
    }, 2000);
    // audioError.play();
  };

  const testBox1 = (imgClick) => {
    const foundBox2 = listBox2.find((images) => images === imgClick);
    foundBox2 ? success() : error();
  };

  const testBox2 = (imgClick) => {
    const foundBox1 = listBox1.find((images) => images === imgClick);
    foundBox1 ? success() : error();
  };

  var same = imageNames[Math.floor(Math.random() * imageNames.length)];

  var box1 = [same];
  for (var i = 0; i < imageNames.length; i++) {
    var idx = imageNames[Math.floor(Math.random() * imageNames.length)];
    let test = box1.find((e) => e === idx);
    if (!test && box1.length < numfor) {
      box1.push(idx);
      box1.sort(() => Math.random() - 0.5);
    }
  }

  const loadBox1 = () => {
    setListBox1(box1);
  };

  var box2 = [same];
  for (var i = 0; i < imageNames.length; i++) {
    var idx = imageNames[Math.floor(Math.random() * imageNames.length)];
    let test = box2.find((e) => e === idx);
    let test1 = box1.find((e) => e === idx);
    if (!test && !test1 && box2.length < numfor) {
      box2.push(idx);
      box2.sort(() => Math.random() - 0.5);
    }
  }
  const loadBox2 = () => {
    setListBox2(box2);
  };

  return (
    <div className="boxes">
      DOUBLE
      {gifSuccess && (
        <div className="gif-answer">
          {" "}
          <img src={GifSuccess} alt="logo" style={{ width: "50%" }} />
        </div>
      )}
      {gifError && (
        <div className="gif-answer">
          <img src={GifError} alt="logo" style={{ width: "40%" }} />{" "}
        </div>
      )}
      <div className={small_large} id="box1">
        {" "}
        {listBox1.map((imgClick, index) => (
          <img
            className="imgbox"
            key={index}
            src={`img/${imgClick}`}
            alt=""
            onClick={() => {
              testBox1(imgClick);
            }}
            disabled={disable}
          />
        ))}{" "}
      </div>
      <div className={small_large} id="box2">
        {" "}
        {listBox2.map((imgClick, index) => (
          <img
            className="imgbox"
            key={index}
            src={`img/${imgClick}`}
            alt=""
            onClick={() => {
              testBox2(imgClick);
            }}
            disabled={disable}
          />
        ))}
      </div>{" "}
      <div className="div-btn-start">
        <button
          onClick={() => {
            setIntervalval();
            setValBtnPause("עצור משחק");
            start();
          }}
        >
          משחק חדש
        </button>
        <button
          onClick={() => {
            if (disable === false) {
              clear_Interval();
              setDisable(true);
              setValBtnPause("המשך משחק");
            } else {
              setValBtnPause("עצור משחק");
              setDisable(false);
              startInterval();
            }
          }}
        >
          {valBtnPause}
        </button>
        <button onClick={() => {}}>סיים משחק</button>
      </div>
    </div>
  );
}

export default Boxes;
