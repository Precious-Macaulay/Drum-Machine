import React, { useRef, useEffect, useState } from "react";

function DrumPad({ keyCode, keyTrigger, id, url }) {
  const audioRef = useRef();
  const [sound, setSound] = useState();
  const [clicked, setClick] = useState(false);
  
  
  const playSound = () => {
    sound.currentTime = 0;
    sound.play();
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 100);
  };

  useEffect(() => {
    setSound(audioRef.current);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === keyCode) {
        playSound();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className="drum-pad" id={id} onClick={playSound}>
      <audio ref={audioRef} src={url} className="clip" id={keyTrigger} />
      {keyTrigger}
    </div>
  );
}

export default DrumPad;
