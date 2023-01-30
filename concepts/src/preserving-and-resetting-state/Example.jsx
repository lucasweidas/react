import { useState } from 'react';
import './Example.css';

export default function Example() {
  const [showB, setShowB] = useState(true);

  return (
    <div className="example-app">
      <Counter />
      {showB && <Counter />}
      <label>
        <input type="checkbox" checked={showB} onChange={({ target }) => setShowB(target.checked)} />
        Show second counter
      </label>
    </div>
  );
}

export function Counter({ classes }) {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  let className = `counter ${classes} ${hover ? 'hover' : ''}`;

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
}
