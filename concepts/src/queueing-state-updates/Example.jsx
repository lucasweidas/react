import { useState } from 'react';

// When you pass an "updater function" to a state setter, it will queue that function and on the next render, all the queued functions will be executed
export default function Example() {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(n => n + 1);
    setNumber(10);
    setNumber(n => n + 1);
  };

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={handleClick}>Increase the number</button>
    </div>
  );
}

// The value returned by the last updater function will be the value of the state variable
