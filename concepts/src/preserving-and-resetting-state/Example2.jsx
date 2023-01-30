import { useState } from 'react';
import { Counter } from './Example';
import './Example.css';

export default function Example() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div className="example-app">
      {isFancy ? <Counter classes="fancy" /> : <Counter />}
      <label>
        <input type="checkbox" checked={isFancy} onChange={({ target }) => setIsFancy(target.checked)} />
        Show fancy counter
      </label>
    </div>
  );
}
