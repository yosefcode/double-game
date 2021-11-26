import "./boxes.css";
import React, { useState, useEffect } from "react";
import GifSuccess from "./Line Stickers & Themes.gif";
import GifError from "./thumbs-down-emoji-unscreen.gif";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
function Boxes(props) {
  const {
    numfor,
    audioSuccess,
    audioError,
    small_large,
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
  const [startError, setStartError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [disablePause, setDisablePause] = useState(true);
  const [valBtnPause, setValBtnPause] = useState("עצור משחק");
  const [correctAnswer, setCorrectAnswer] = useState();

  const startInterval = () => {
    var interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    setIntervalval(interval);
  };

  const clear_Interval = () => {
    clearInterval(intervalval);
  };

  useEffect(() => {
    if (numfor > 5) {
      loadBox1();
      loadBox2();
    }
  }, [numfor]);

  useEffect(() => {
    if (timer === -1) {
      for (var a = 0; a < listBox2.length; a++) {
        let testAnswer = listBox1.find((s) => s === listBox2[a]);
        if (testAnswer) {
          setCorrectAnswer(testAnswer);
        }
      }
      error();
    }
  }, [timer, setTimer]);

  const start = () => {
    if (numfor > 5 && timer > 0) {
      setDisable(false);
      clear_Interval();
      setSuccess_Point(0);
      setError_Point(0);
      loadBox1();
      loadBox2();
      setTimer(hardTimer);
      startInterval();
      setDisablePause(false);
    } else {
      setStartError(true);
      setTimeout(function () {
        setStartError(false);
      }, 3000);
    }
  };
  const end = () => {
    setDisablePause(true);
    setDisable(true);
    clear_Interval();
    setSuccess_Point(0);
    setError_Point(0);
    loadBox1();
    loadBox2();
    setTimer(hardTimer);
  };

  const success = () => {
    setSuccess_Point(success_Point + 1);
    setTimer(hardTimer);
    clear_Interval();
    setGifSuccess(true);
    setTimeout(function () {
      setCorrectAnswer();
      setGifSuccess(false);
      loadBox1();
      loadBox2();
      startInterval();
    }, 3000);
    audioSuccess.play();
  };

  const error = () => {
    setTimer(hardTimer);
    setError_Point(error_Point + 1);
    clear_Interval();
    setGifError(true);
    setTimeout(function () {
      setCorrectAnswer();
      setGifError(false);
      loadBox1();
      loadBox2();
      startInterval();
    }, 3000);
    audioError.play();
  };
  const testBox1 = (imgClick) => {
    const foundBox2 = listBox2.find((images) => images === imgClick);
    for (var a = 0; a < listBox2.length; a++) {
      let testAnswer = listBox1.find((s) => s === listBox2[a]);
      if (testAnswer) {
        setCorrectAnswer(testAnswer);
      }
    }
    foundBox2 ? success() : error();
  };

  const testBox2 = (imgClick) => {
    const foundBox1 = listBox1.find((images) => images === imgClick);
    for (var a = 0; a < listBox2.length; a++) {
      let testAnswer = listBox1.find((s) => s === listBox2[a]);
      if (testAnswer) {
        setCorrectAnswer(testAnswer);
      }
    }
    foundBox1 ? success() : error();
  };

  var same = imageNames[Math.floor(Math.random() * imageNames.length)];

  var box1 = [same];
  for (var a = 0; a < imageNames.length; a++) {
    var randomBox1 = imageNames[Math.floor(Math.random() * imageNames.length)];
    let test = box1.find((e) => e === randomBox1);

    if (!test && box1.length < numfor) {
      box1.push(randomBox1);
      box1.sort(() => Math.random() - 0.5);
    }
  }

  const loadBox1 = () => {
    setListBox1(box1);
  };

  var box2 = [same];
  for (var b = 0; b < imageNames.length; b++) {
    var randomBox2 = imageNames[Math.floor(Math.random() * imageNames.length)];
    var test = box2.find((e) => e === randomBox2);
    let test1 = box1.find((e) => e === randomBox2);
    if (!test && !test1 && box2.length < numfor) {
      box2.push(randomBox2);
      box2.sort(() => Math.random() - 0.5);
    }
  }
  const loadBox2 = () => {
    setListBox2(box2);
  };

  return (
    <div className="boxes">
      <div className="header">DOUBLE</div>
      {gifSuccess && (
        <div className="gif-answer">
          {" "}
          <img src={GifSuccess} alt="logo" style={{ width: "15%" }} />
        </div>
      )}
      {gifError && (
        <div className="gif-answer">
          <img src={GifError} alt="logo" style={{ width: "15%" }} />{" "}
        </div>
      )}
      {startError && (
        <div className="gif-answer">
          <div className="err-start">
            יש לבחור מס' שניות וכמות תמונות לכל סיבוב
            <br />
            <br />
            <DoubleArrowIcon
              style={{
                fontSize: "5vw",
                color: "red",
              }}
            />
            <DoubleArrowIcon
              style={{
                fontSize: "5vw",
                color: "red",
              }}
            />
            <DoubleArrowIcon
              style={{
                fontSize: "5vw",
                color: "red",
              }}
            />
            <DoubleArrowIcon
              style={{
                fontSize: "5vw",
                color: "red",
              }}
            />
            <DoubleArrowIcon
              style={{
                fontSize: "5vw",
                color: "red",
              }}
            />
          </div>{" "}
        </div>
      )}
      <div className="all-boxes">
        <div className={small_large} id="box1">
          {" "}
          {listBox1.map((imgClick, index) =>
            !correctAnswer ? (
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
            ) : imgClick === correctAnswer ? (
              <img
                className="imgboxCorrectAnswer"
                key={index}
                src={`img/${imgClick}`}
                alt=""
                onClick={() => {
                  testBox1(imgClick);
                }}
                disabled={disable}
              />
            ) : (
              <img
                style={{ opacity: 0.3 }}
                className="imgbox"
                key={index}
                src={`img/${imgClick}`}
                alt=""
                onClick={() => {
                  testBox1(imgClick);
                }}
                disabled={disable}
              />
            )
          )}{" "}
        </div>
        <div className={small_large} id="box2">
          {" "}
          {listBox2.map((imgClick, index) =>
            !correctAnswer ? (
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
            ) : imgClick === correctAnswer ? (
              <img
                className="imgboxCorrectAnswer"
                key={index}
                src={`img/${imgClick}`}
                alt=""
                onClick={() => {
                  testBox2(imgClick);
                }}
                disabled={disable}
              />
            ) : (
              <img
                style={{ opacity: 0.3 }}
                className="imgbox"
                key={index}
                src={`img/${imgClick}`}
                alt=""
                onClick={() => {
                  testBox2(imgClick);
                }}
                disabled={disable}
              />
            )
          )}
        </div>
      </div>
      <div className="div-btn-start">
        <button
          className="btn-start"
          onClick={() => {
            setIntervalval();
            setValBtnPause("עצור משחק");
            start();
          }}
        >
          משחק חדש
        </button>
        <button
          disabled={disablePause}
          className="btn-start"
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
        <button disabled={disablePause} className="btn-start" onClick={end}>
          סיים משחק
        </button>
      </div>
    </div>
  );
}

export default Boxes;
