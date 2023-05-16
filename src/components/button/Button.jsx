import React, { useState } from "react";
import "./button.css";

function Button() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="buttons-wrapper">
      <button className="increment-button" onClick={decrement}>
        -
      </button>
      <button className="main-button">I was Clicked {count} times</button>
      <button className="increment-button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Button;
