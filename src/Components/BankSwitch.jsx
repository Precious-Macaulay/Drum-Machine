import React from "react";

function BankSwitch({ setBank, bank, setDisplay, power }) {
  const handleClick = () => {
    if (!power) {
      setDisplay(`${!bank ? "Heater Kit" : "Smooth Piano Kit"}`);
      setBank(!bank);
    }
  };
  return (
    <div onClick={handleClick}>
      <div>Bank</div>
      <div className="toggle-button">
        <div className={`toggle-show ${!bank ? "inactive" : null}`}></div>
        <div className={`toggle-show ${bank ? "inactive" : null}`}></div>
      </div>
    </div>
  );
}

export default BankSwitch;
