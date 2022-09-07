import React, { useRef, useEffect, useState } from "react";

function DrumPad({ keyCode, keyTrigger, id, url }) {
  const audioRef = useRef();

  const [sound, setSound] = useState();
  const [clicked, setClick] = useState(false);

  useEffect(() => {
    setSound(audioRef.current);
  }, []);

  const playSound = () => {
    sound.currentTime = 0;
    sound.play();
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 100);
  };

  return (
    <div className="drum-pad" id={id} onClick={playSound}>
      <audio ref={audioRef} src={url} className="clip" id={keyTrigger} />
      {keyTrigger}
    </div>
  );
}

export default DrumPad;
