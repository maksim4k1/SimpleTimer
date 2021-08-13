import React, { useState } from "react";
import style from "./ToggleDay.module.scss"

function ToggleDay(){
    const [isDay, setDay] = useState(true);

    function toggleTime() {
        if(isDay === true){
            setDay(false);
        } else{
            setDay(true);
        }
    }

    return(
        <div className={`${style.sky} ${isDay ? style.daySky : style.nightSky}`} onClick={toggleTime}>
            <div className={`${style.ball} ${isDay ? style.sun : style.moon}`}></div>
            <div className={`${style.place} ${isDay ? style.dayPlace : style.nightPlace}`}></div>
        </div>
    );
}

export default ToggleDay;