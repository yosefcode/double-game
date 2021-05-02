import { useState } from "react";
import "./sidebar.css";
import Switch from "@material-ui/core/Switch";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";

function SideBar(props) {
  const { setSmall_large, audio, setAudio, setNumfor, point } = props;

  const [state, setState] = useState(false);

  const handleChange = () => {
    state === false ? Hard() : easy();
  };

  const mute = () => {
    audio === true ? setAudio(false) : setAudio(true);
  };

  const Hard = () => {
    setState(true);
    setNumfor(16);
    setSmall_large("boxlarge");
  };

  const easy = () => {
    setState(false);
    setNumfor(9);
    setSmall_large("boxsmall");
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
              setAudio(false);
            }}
          />
        ) : (
          <NotificationsOffIcon
            fontSize="large"
            className="iconbip"
            onClick={() => {
              setAudio(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default SideBar;
