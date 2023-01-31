import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  return (
    <div>
      <input type="text" value={text} onChange={({ target }) => setText(target.value)} />
      <button onClick={() => onAddTask(text)}>Add</button>
    </div>
  );
}
