import React from "react";
import bankOne from "./../bank/bankOne";
import bankTwo from "./../bank/bankTwo";
import DrumPad from "./DrumPad";

function DrumPads() {
  const bank = bankOne;

  return (
    <div>
      {bank.map((item) => {
        const { keyCode, keyTrigger, id, url } = item;
        return (
          <DrumPad
            key={id}
            keyCode={keyCode}
            keyTrigger={keyTrigger}
            url={url}
          />
        );
      })}
    </div>
  );
}

export default DrumPads;
