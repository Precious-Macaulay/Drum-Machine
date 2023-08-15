import React from "react";

const PowerSwitch = ({ power, setPower }) => {
  const handleClick = () => {
    setPower(!power);
  };
  return (
    <div onClick={handleClick}>
      <div>Power</div>
      <div className="toggle-button">
        <div className={`toggle-show ${!power ? "inactive" : null}`}></div>
        <div className={`toggle-show ${power ? "inactive" : null}`}></div>
      </div>
    </div>
  );
};

export default PowerSwitch;
