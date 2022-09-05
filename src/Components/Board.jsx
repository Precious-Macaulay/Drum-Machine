import React from "react";
import Display from "./Display";
import DrumPads from "./DrumPads";
import Header from "./Header";
import ToggleSwitch from "./ToggleSwitch";
import Slider from "./Slider";

function Board() {
  return (
    <div className="board" id="drum-machine">
      <Header />
      <DrumPads />
      <ToggleSwitch />
      <Display />
      <Slider />
      <ToggleSwitch />
    </div>
  );
}

export default Board;
