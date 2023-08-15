import React, { useRef, useEffect, useState } from "react";

function DrumPad({ keyCode, keyTrigger, id, url, setDisplay, volume, power }) {
  const audioRef = useRef();
  const [sound, setSound] = useState({});
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if (!power) {
      playSound();
      setDisplay(id);
    }
  };

  const playSound = () => {
    sound.currentTime = 0;
    sound.volume = volume;
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
        if (!power) {
          setDisplay(id);
          playSound();
        }
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className="drum-pad" id={id} onClick={handleClick}>
      <audio ref={audioRef} src={url} className="clip" id={keyTrigger} />
      {keyTrigger}
    </div>
  );
}

export default DrumPad;
