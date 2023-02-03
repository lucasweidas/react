import { useState } from 'react';
import { useTasksDispatch } from './TasksContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    setText('');
    dispatch({ type: 'added', id: nextId++, text });
  };
  const handleChange = ({ target }) => setText(target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

let nextId = 3;
