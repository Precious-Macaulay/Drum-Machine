import React from "react";

function DrumPad({ keyCode, keyTrigger, id, url }) {
  const audio = <audio src={url} className="clip" id={keyTrigger} />;

  const handleClickTrigger = () => {
    audio.play();
  };

  return (
    <div className="drum-pad" id={id} onClick={handleClickTrigger}>
      {audio}
      {keyTrigger}
    </div>
  );
}

export default DrumPad;
