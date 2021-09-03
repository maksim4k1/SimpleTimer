import React, { useEffect, useState } from "react";

function Timer () {
  const [time, setTime] = useState(0);
  const [isPause, setPause] = useState(false);

  function pauseHandler(){
    if(isPause === true){
      setPause(false);
    } else{
      setPause(true);
    }
  }

  function resetTimer(){
    setTime(0);
  }

  useEffect(() => {
    if(isPause === false){
      const interval = setInterval(() => {
        setTime(time + 0.1);
        clearInterval(interval);
      }, 100);
    }
  }, [isPause, time])

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