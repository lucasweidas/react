import { useDeferredValue, useMemo, useState } from 'react';
import './Example.css';

export default function Example() {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);
  const handleChange = ({ target }) => setInput(target.value);

  return (
    <div>
      <label>
        Enter something:
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <div style={{ opacity: input !== deferredInput ? 0.5 : 1 }}>
        <List input={deferredInput} />
      </div>
    </div>
  );
}

function List({ input }) {
  if (input === '') return null;

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < 10000; i++) {
      l.push(<li key={i}>{input}</li>);
    }
    return l;
  }, [input]);

  return <ul>{list}</ul>;
}
