import React, { useState } from "react";
import "./button.css";

function Button() {
  const [count, setCount] = useState(0);
  const incrementDecrement = (a) => {
    setCount(count + a);
  };
  return (
    <div className="buttons-wrapper">
      <button
        className="increment-button"
        onClick={() => incrementDecrement(-1)}
      >
        -
      </button>
      <button className="main-button">I was Clicked {count} times</button>
      <button
        className="increment-button"
        onClick={() => incrementDecrement(1)}
      >
        +
      </button>
    </div>
  );
}

export default Button;
