import { useRef, useState } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalId = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    setIsRunning(true);
    intervalId.current = setInterval(() => setNow(Date.now()), 10);
  }

  function handleStop() {
    clearInterval(intervalId.current);
    setIsRunning(false);
  }

  let secoundsPassed = 0;
  if (startTime != null && now != null) {
    secoundsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h1>TIme passed: {secoundsPassed.toFixed(3)}</h1>
      {isRunning ? <button onClick={handleStop}>Stop</button> : <button onClick={handleStart}>Start</button>}
    </div>
  );
}
