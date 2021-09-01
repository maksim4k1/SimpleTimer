import "./App.css";
import Wrapper from './components/Wrapper' // нужно создать
import Circle from './components/Circle' // нужно создать
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState(0)

  function colorHandler(colorNum){
    setColor(colorNum);
  }

  return (
    <div className={`bg color-${color}`}>
      <Wrapper>
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <Circle key={num} num={num} color={color} onChangeColor={colorHandler}/>
          );
        })}
      </Wrapper>
    </div>
  );
}
