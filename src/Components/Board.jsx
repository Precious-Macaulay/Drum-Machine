import React from "react";
import Display from "./Display";
import DrumPads from "./DrumPads";
import Header from "./Header";
import BankSwitch from "./BankSwitch";
import PowerSwitch from "./PowerSwitch";
import Slider from "./Slider";
import { useState } from "react";

function Board() {
  const [displayText, setDisplayText] = useState("");
  const [bank, setBank] = useState(true);
  const [volume, setVolume] = useState(1);
  const [power, setPower] = useState(false);

  return (
    <div className="board" id="drum-machine">
      <Header />
      <div className="board-container">
        <DrumPads
          setDisplay={setDisplayText}
          volume={volume}
          bank={bank}
          power={power}
        />
        <div className="control-panel">
          <PowerSwitch power={power} setPower={setPower} />
          <Display>{!power ? displayText : ""}</Display>
          <Slider
            setDisplay={setDisplayText}
            setVolume={setVolume}
            volume={volume}
            power={power}
          />
          <BankSwitch
            setDisplay={setDisplayText}
            setBank={setBank}
            bank={bank}
            power={power}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
