import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-app">
      <div className="counter-display">
        <h1 className="counter-value">Counter: {counter}</h1>
      </div>
      <div className="counter-buttons">
        <button
          className="btn increment"
          aria-label="Increment"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <button className="btn reset">Reset</button>
        <button className="btn decrement">Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
