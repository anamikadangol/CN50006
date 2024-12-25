import React, { useState, useEffect } from "react";
import Love from "./Love.png";
import Sad from "./sad.png";
import Like from "./like.png";

function EmojeeCounter(props) {
  const [pic, setPic] = useState(Love); 
  const [count, setCount] = useState(0); 

  
  useEffect(() => {
    if (props.pic === "Love.png") setPic(Love);
    else if (props.pic === "like.png") setPic(Like);
    else if (props.pic === "sad.png") setPic(Sad);
  }, [props.pic]);

  
  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>
        {props.pic} <span></span>
        <button onClick={ClickHandle}>
          {count}
          <img src={pic} alt={props.pic} />
        </button>
      </p>
    </div>
  );
}

export default EmojeeCounter;