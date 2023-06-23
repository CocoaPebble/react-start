import React from "react";
import { useState } from "react";

function NumberTest() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const incrementAsync = () => {
    setTimeout(() => {
      setNumber((num) => num + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>React State</h1>
      <h2>Number: {number}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Increment Async</button>
    </div>
  );
}

export default NumberTest;
