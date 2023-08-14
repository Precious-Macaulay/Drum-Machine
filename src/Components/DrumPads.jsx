import React from "react";
import bankOne from "./../bank/bankOne";
import bankTwo from "./../bank/bankTwo";
import DrumPad from "./DrumPad";

function DrumPads({ setDisplay, bank, volume, power }) {
  const selectedBank = bank ? bankOne : bankTwo;
  return (
    <div className="pad-container">
      {selectedBank.map((item) => {
        const { keyCode, keyTrigger, id, url } = item;
        return (
          <DrumPad
            key={id}
            keyCode={keyCode}
            keyTrigger={keyTrigger}
            url={url}
            id={id}
            setDisplay={setDisplay}
            volume={volume}
            power={power}
          />
        );
      })}
    </div>
  );
}

export default DrumPads;
