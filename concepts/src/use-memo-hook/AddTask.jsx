import { memo, useRef } from 'react';

export default memo(function AddTask({ onAddTask }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
});
