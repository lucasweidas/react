import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);

  function handleStartTimer() {
    setIsRunning(true);
    intervalId.current = setInterval(() => setTime(n => n + 10), 10);
  }

  function handlePauseTimer() {
    setIsRunning(false);
    clearInterval(intervalId.current);
  }

  function handleResetTimer() {
    setIsRunning(false);
    setTime(() => setTime(0));
    clearInterval(intervalId.current);
  }

  return (
    <div>
      <p>
        <span>{formatTime(time, 'hour')}:</span>
        <span>{formatTime(time, 'minute')}:</span>
        <span>{formatTime(time, 'second')},</span>
        <span>{formatTime(time, 'millisecond')}</span>
      </p>
      {!isRunning && <button onClick={handleStartTimer}>Start</button>}
      {isRunning && <button onClick={handlePauseTimer}>Pause</button>}
      <button onClick={handleResetTimer}>Reset</button>
    </div>
  );
}

function formatTime(time, unit) {
  const padTime = num => num.toString().padStart(2, '0');

  switch (unit) {
    case 'millisecond':
      return padTime(Math.floor((time / 10) % 100));
    case 'second':
      return padTime(Math.floor((time / 1000) % 60));
    case 'minute':
      return padTime(Math.floor((time / 60000) % 60));
    case 'hour':
      return padTime(Math.floor(time / 3600000));
  }
}
