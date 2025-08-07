import { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [ison, setIson] = useState(false);

  const handleToggleSwitch = () => {
    setIson(!ison);
  };

  const ToggleLOgic = ison ? "ON" : "OFF";

  return (
    <>
      <div
        className="main_box"
        onClick={handleToggleSwitch}
        style={{ backgroundColor: ison ? "green" : "red" }}
      >
        <div className={`switch ${ToggleLOgic}`}>
          <span className="switch-state">{ToggleLOgic}</span>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
