import { useState } from "react";
import "./sidebar.css";
import Switch from "@material-ui/core/Switch";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";

function SideBar(props) {
  const {
    setSmall_large,
    audioSuccess,
    audioError,
    setNumfor,
    point,
    setpoint,
  } = props;

  const [state, setState] = useState(false);
  const [audio, setAudio] = useState(true);

  const handleChange = () => {
    state === false ? Hard() : easy();
  };

  const Hard = () => {
    setState(true);
    setNumfor(16);
    setSmall_large("boxlarge");
    setpoint(0);
  };

  const easy = () => {
    setState(false);
    setNumfor(9);
    setSmall_large("boxsmall");
    setpoint(0);
  };

  return (
    <div className="sidebar">
      <div className="point">{point}</div>
      <br />
      <div className="point">00:00:00</div>
      <br />
      <br />

      <div className="switch">
        {`קשה`}
        {"   "}
        <Switch checked={state} onChange={handleChange} color="primary" />
        {"   "}
        {`קל`}
        <br />
        <br />
        {audio === true ? (
          <NotificationsIcon
            fontSize="large"
            className="iconbip"
            onClick={() => {
              audioError.volume = 0;
              audioSuccess.volume = 0;
              setAudio(false);
            }}
          />
        ) : (
          <NotificationsOffIcon
            fontSize="large"
            className="iconbip"
            onClick={() => {
              audioError.volume = 1;
              audioSuccess.volume = 1;
              setAudio(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default SideBar;
