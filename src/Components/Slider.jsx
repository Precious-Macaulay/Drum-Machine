import React from "react";

function Slider({ setDisplay, setVolume, power }) {
  const handleChange = (e) => {
    setVolume(e.target.value);
    setDisplay(`Volume : ${Math.round(e.target.value * 100)}`);
  };
  return (
    <div className="slidecontainer">
      <input
        type="range"
        onChange={handleChange}
        min={0}
        max={1}
        step={0.01}
        disabled={power}
      />
    </div>
  );
}

export default Slider;
