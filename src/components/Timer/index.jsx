import React, { useEffect, useState } from "react";

function Timer () {
  const [time, setTime] = useState(0);
  const [isPause, setPause] = useState(false);
  const [isReset, setReset] = useState(false);

  function pauseHandler(){
    if(isPause === true){
      setPause(false);
    } else{
      setPause(true);
    }
  }

  function resetTimer(){
    setReset(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(isPause === false && isReset === false){
        setTime(time + 0.1);
      } else if(isPause === false && isReset === true){
        setTime(0);
        setReset(false);
        setPause(true);
      } else if(isPause === true && isReset === true){
        setTime(0);
        setReset(false);
      }
      clearInterval(interval);
    }, 100);
  }, [isPause, time, isReset])

  return(
    <div className="content">
      <div className="time">{Math.floor(time)}s</div>
      <div className="buttons">
        <button className="button blue" onClick={pauseHandler}>{isPause ? "START" : "PAUSE"}</button>
        <button className="button" onClick={resetTimer}>RESET</button>
      </div>
    </div>
  );
}

export default Timer;