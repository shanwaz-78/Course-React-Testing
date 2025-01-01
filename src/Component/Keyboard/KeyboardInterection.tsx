import React, { useState } from 'react';

const KeyboardInterection = () => {
  const [value, setValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setDisplayValue(value.trim());
  };

  return (
    <div>
      <h2>{displayValue}</h2>
      <input
        type="text"
        placeholder="Please write some text"
        onChange={handleChange}
        value={value}
      />
      <button onClick={handleClick}>Set</button>
    </div>
  );
};

export default KeyboardInterection;
