import { useRef } from 'react';

export default function Example() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <button onClick={handleClick}>Focus input</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}
