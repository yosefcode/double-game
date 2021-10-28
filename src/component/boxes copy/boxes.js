import "./boxes.css";
import React, { useState, useEffect, useRef } from "react";

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

  const success = () => {
    setpoint(point + 10);
    audioSuccess.play();
  };

  const error = () => {
    setpoint(point - 10);
    audioError.play();
  };

  const testBox1 = (imgClick) => {
    const foundBox2 = box2.find((images) => images === imgClick);
    foundBox2 ? success() : error();
  };
  const testBox2 = (imgClick) => {
    const foundBox1 = box1.find((images) => images === imgClick);
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
    <div className="boxes">
      DOUBLE
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
          />
        ))}
      </div>{" "}
    </div>
  );
}

export default Boxes;
